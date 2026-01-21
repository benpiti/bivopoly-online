import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 3000;

// Reliable absolute path to /public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

// Serve static files
app.use(express.static(publicDir));

// Make sure "/" always serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Simple health check (useful for Railway)
app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

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
  const code = socket.data.roomCode;
  if (!code) return null;
  return rooms.get(code) || null;
}

function removePlayerFromRoom(code, socketId) {
  const room = rooms.get(code);
  if (!room) return;

  room.players = room.players.filter((p) => p.socketId !== socketId);

  // If host left, promote lowest seat to host
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

  if (room.players.length === 0) rooms.delete(code);
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
    const cleanCode = String(code || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 8);

    const room = rooms.get(cleanCode);
    if (!room) return socket.emit("roomError", "Room not found.");
    if (room.players.length >= 4) return socket.emit("roomError", "Room is full (max 4).");

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

    if (room.lastSnapshot) socket.emit("hostState", room.lastSnapshot);
  });

  // Host broadcasts full state snapshots
  socket.on("hostState", (snapshot) => {
    const room = getRoomOfSocket(socket);
    if (!room) return;
    if (room.hostId !== socket.id) return;

    room.lastSnapshot = snapshot;
    io.to(socket.data.roomCode).emit("hostState", snapshot);
  });

  // Non-host requests an action; server forwards to host
  socket.on("requestAction", ({ type, payload }) => {
    const room = getRoomOfSocket(socket);
    if (!room) return;
    if (room.hostId === socket.id) return;

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
  console.log("Server running on port", PORT);
});

