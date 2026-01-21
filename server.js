import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

/**
 * Room model:
 * rooms[code] = {
 *   hostId: string,
 *   players: Array<{ socketId: string, name: string, seat: number, isHost: boolean }>,
 *   lastSnapshot: object | null
 * }
 */
const rooms = new Map();

function makeCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing 0/1/O/I
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function createUniqueCode() {
  let code = makeCode();
  while (rooms.has(code)) code = makeCode();
  return code;
}

function publicPlayers(room) {
  return (room?.players || []).map((p) => ({
    name: p.name,
    seat: p.seat,
    isHost: p.isHost,
  }));
}

function getRoomOfSocket(socket) {
  // socket.data.roomCode set when joining
  const code = socket.data.roomCode;
  if (!code) return null;
  return rooms.get(code) || null;
}

function removePlayerFromRoom(code, socketId) {
  const room = rooms.get(code);
  if (!room) return;

  room.players = room.players.filter((p) => p.socketId !== socketId);

  // If host left, promote lowest seat to host (simple + deterministic)
  if (room.hostId === socketId) {
    const nextHost = room.players.slice().sort((a, b) => a.seat - b.seat)[0];
    if (nextHost) {
      room.hostId = nextHost.socketId;
      room.players = room.players.map((p) => ({
        ...p,
        isHost: p.socketId === room.hostId,
      }));
    }
  }

  if (room.players.length === 0) {
    rooms.delete(code);
  }
}

io.on("connection", (socket) => {
  socket.data.roomCode = null;

  socket.on("createRoom", ({ name }) => {
    const code = createUniqueCode();

    const room = {
      hostId: socket.id,
      players: [
        {
          socketId: socket.id,
          name: String(name || "Host").slice(0, 15),
          seat: 0,
          isHost: true,
        },
      ],
      lastSnapshot: null,
    };

    rooms.set(code, room);
    socket.join(code);
    socket.data.roomCode = code;

    socket.emit("roomJoined", {
      code,
      seat: 0,
      isHost: true,
      players: publicPlayers(room),
    });

    io.to(code).emit("roomUpdate", { code, players: publicPlayers(room) });
  });

  socket.on("joinRoom", ({ code, name }) => {
    const cleanCode = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
    const room = rooms.get(cleanCode);

    if (!room) {
      socket.emit("roomError", "Room not found.");
      return;
    }

    if (room.players.length >= 4) {
      socket.emit("roomError", "Room is full (max 4).");
      return;
    }

    // Pick the lowest available seat
    const used = new Set(room.players.map((p) => p.seat));
    let seat = 0;
    while (used.has(seat)) seat++;

    room.players.push({
      socketId: socket.id,
      name: String(name || "Player").slice(0, 15),
      seat,
      isHost: false,
    });

    socket.join(cleanCode);
    socket.data.roomCode = cleanCode;

    socket.emit("roomJoined", {
      code: cleanCode,
      seat,
      isHost: false,
      players: publicPlayers(room),
    });

    io.to(cleanCode).emit("roomUpdate", { code: cleanCode, players: publicPlayers(room) });

    // If the host already started and we have a snapshot, send it to the joiner.
    if (room.lastSnapshot) {
      socket.emit("hostState", room.lastSnapshot);
    }
  });

  // Host broadcasts full state snapshots
  socket.on("hostState", (snapshot) => {
    const room = getRoomOfSocket(socket);
    if (!room) return;
    if (room.hostId !== socket.id) return; // only host

    room.lastSnapshot = snapshot;
    // Broadcast to everyone (including host; harmless)
    io.to(socket.data.roomCode).emit("hostState", snapshot);
  });

  // Non-host requests an action; server forwards to current host
  socket.on("requestAction", ({ type, payload }) => {
    const room = getRoomOfSocket(socket);
    if (!room) return;
    if (room.hostId === socket.id) return; // host doesn’t request

    const from = room.players.find((p) => p.socketId === socket.id);
    if (!from) return;

    io.to(room.hostId).emit("hostAction", {
      type: String(type || "").toUpperCase(),
      payload: payload ?? null,
      fromSeat: from.seat,
      fromName: from.name,
    });
  });

  socket.on("disconnect", () => {
    const code = socket.data.roomCode;
    if (!code) return;

    removePlayerFromRoom(code, socket.id);

    const room = rooms.get(code);
    if (room) {
      io.to(code).emit("roomUpdate", { code, players: publicPlayers(room) });

      // Notify new host (if any) that they are now host.
      // Front-end decides what to do.
      const hostPlayer = room.players.find((p) => p.socketId === room.hostId);
      if (hostPlayer) {
        io.to(room.hostId).emit("roomJoined", {
          code,
          seat: hostPlayer.seat,
          isHost: true,
          players: publicPlayers(room),
        });
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`BIVOPOLY-ONLINE running on http://localhost:${PORT}`);
});
