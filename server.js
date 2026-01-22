import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.use(express.static(publicDir));
app.get("/", (req, res) => res.sendFile(path.join(publicDir, "index.html")));
app.get("/health", (req, res) => res.status(200).send("ok"));

// ===== Shared data (copied from client) =====
const COLOR_MAP = {
  "Orange": "#F56600",
  "Purple": "#522D80",
  "Blue":   "#002857",
  "Red":    "#C20F2F"
};

const BOARD_TEMPLATE = [
  { index: 0,  name: "Go", type: "go" },

  {
    index: 1,
    name: "Goshen Acquatic Center",
    type: "property",
    price: 60,
    baseRent: 2,
    group: "Sport",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 2, 1: 10, 2: 30, 3: 90, 4: 160, hotel: 250 }
  },
  { index: 2,  name: "Community Chest",        type: "community-chest" },
  {
    index: 3,
    name: "East Arm Rowing Club",
    type: "property",
    price: 60,
    baseRent: 4,
    group: "Sport",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 4, 1: 20, 2: 60, 3: 180, 4: 320, hotel: 450 }
  },
  { index: 4,  name: "Flower Tax",             type: "tax", amount: 200 },

  { index: 5,  name: "EWR", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 6,
    name: "Greenwood Lake Middle School",
    type: "property",
    price: 100,
    baseRent: 6,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 6, 1: 30, 2: 90, 3: 270, 4: 400, hotel: 550 }
  },
  { index: 7,  name: "Chance",                type: "chance" },
  {
    index: 8,
    name: "Warwick Valley Middle School",
    type: "property",
    price: 100,
    baseRent: 6,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 6, 1: 30, 2: 90, 3: 270, 4: 400, hotel: 550 }
  },
  {
    index: 9,
    name: "Warwick Valley High School",
    type: "property",
    price: 120,
    baseRent: 8,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 8, 1: 40, 2: 100, 3: 300, 4: 450, hotel: 600 }
  },

  { index: 10, name: "Long Distance / Just Visiting", type: "jail" },

  {
    index: 11,
    name: "Little John Colliseum",
    type: "property",
    price: 140,
    baseRent: 10,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 10, 1: 50, 2: 150, 3: 450, 4: 625, hotel: 750 }
  },

  { index: 12, name: "St. Andrew's Catholic Church", type: "utility", price: 150, owner: null, mortgaged: false },

  {
    index: 13,
    name: "Doug Kingsmore Stadium",
    type: "property",
    price: 140,
    baseRent: 10,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 10, 1: 50, 2: 150, 3: 450, 4: 625, hotel: 750 }
  },
  {
    index: 14,
    name: "Memorial Stadium",
    type: "property",
    price: 160,
    baseRent: 12,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 12, 1: 60, 2: 180, 3: 500, 4: 700, hotel: 900 }
  },

  { index: 15, name: "GSP", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 16,
    name: "Gressette Hall",
    type: "property",
    price: 180,
    baseRent: 14,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 14, 1: 70, 2: 200, 3: 550, 4: 750, hotel: 950 }
  },
  { index: 17, name: "Community Chest",        type: "community-chest" },
  {
    index: 18,
    name: "Holtzendorff Hall",
    type: "property",
    price: 180,
    baseRent: 14,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 14, 1: 70, 2: 200, 3: 550, 4: 750, hotel: 950 }
  },
  {
    index: 19,
    name: "Cooper Library",
    type: "property",
    price: 200,
    baseRent: 16,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 16, 1: 80, 2: 220, 3: 600, 4: 800, hotel: 1000 }
  },

  { index: 20, name: "No Wake Zone",           type: "free-parking" },

  {
    index: 21,
    name: "The DUC",
    type: "property",
    price: 220,
    baseRent: 18,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 18, 1: 90, 2: 250, 3: 700, 4: 875, hotel: 1050 }
  },
  { index: 22, name: "Chance",                 type: "chance" },
  {
    index: 23,
    name: "Dorothy Day",
    type: "property",
    price: 220,
    baseRent: 18,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 18, 1: 90, 2: 250, 3: 700, 4: 875, hotel: 1050 }
  },
  {
    index: 24,
    name: "Hurd Science Center",
    type: "property",
    price: 240,
    baseRent: 20,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 20, 1: 100, 2: 300, 3: 750, 4: 925, hotel: 1100 }
  },

  { index: 25, name: "ABE", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 26,
    name: "Tocik Hall",
    type: "property",
    price: 260,
    baseRent: 22,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 22, 1: 110, 2: 330, 3: 800, 4: 975, hotel: 1150 }
  },
  {
    index: 27,
    name: "Donahue Hall",
    type: "property",
    price: 260,
    baseRent: 22,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 22, 1: 110, 2: 330, 3: 800, 4: 975, hotel: 1150 }
  },

  { index: 28, name: "St. Stephen's Catholic Church", type: "utility", price: 150, owner: null, mortgaged: false },

  {
    index: 29,
    name: "Gambet Center",
    type: "property",
    price: 280,
    baseRent: 24,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 24, 1: 120, 2: 360, 3: 850, 4: 1025, hotel: 1200 }
  },

  { index: 30, name: "Go to Long Distance",    type: "go-to-jail" },

  {
    index: 31,
    name: "M&T Bank Stadium",
    type: "property",
    price: 300,
    baseRent: 26,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 26, 1: 130, 2: 390, 3: 900, 4: 1100, hotel: 1275 }
  },
  {
    index: 32,
    name: "Yankee Stadium",
    type: "property",
    price: 300,
    baseRent: 26,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 26, 1: 130, 2: 390, 3: 900, 4: 1100, hotel: 1275 }
  },
  { index: 33, name: "Community Chest",        type: "community-chest" },
  {
    index: 34,
    name: "Madison Square Garden",
    type: "property",
    price: 320,
    baseRent: 28,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 28, 1: 150, 2: 450, 3: 1000, 4: 1200, hotel: 1400 }
  },

  { index: 35, name: "ATL", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  { index: 36, name: "Chance",                 type: "chance" },
  {
    index: 37,
    name: "132 Lake Street",
    type: "property",
    price: 350,
    baseRent: 35,
    group: "Homes",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 35, 1: 175, 2: 500, 3: 1100, 4: 1300, hotel: 1500 }
  },
  
  { index: 38, name: "Cuddle Tax",             type: "tax", amount: 75 },
  {
    index: 39,
    name: "9 Cottage Street",
    type: "property",
    price: 400,
    baseRent: 50,
    group: "Homes",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 50, 1: 200, 2: 600, 3: 1400, 4: 1700, hotel: 2000 }
  }
];

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function makeCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i=0;i<len;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}

function uniqueCode(rooms) {
  let c = makeCode();
  while (rooms.has(c)) c = makeCode();
  return c;
}

// ===== Room store =====
const rooms = new Map(); // code -> room

function publicRoom(room) {
  return {
    code: room.code,
    started: room.started,
    players: room.players.map(p => ({ seat: p.seat, name: p.name, colorName: p.colorName })),
    hostSeat: room.hostSeat
  };
}

function currentSeat(room) {
  return room.state.turnOrder[room.state.currentTurnPointer];
}

function computeAirportRent(room, ownerId) {
  const owned = room.state.board.filter(t => t.type === "airport" && t.owner === ownerId).length;
  // classic-ish: 25, 50, 100, 200
  return [0, 25, 50, 100, 200][owned] || 25;
}

function computeUtilityRent(room, ownerId, diceTotal) {
  const owned = room.state.board.filter(t => t.type === "utility" && t.owner === ownerId).length;
  const mult = owned >= 2 ? 10 : 4;
  return mult * diceTotal;
}

function pay(player, amount) {
  player.money -= amount;
  if (player.money < 0) player.money = player.money; // allow negative for now
}

function give(player, amount) {
  player.money += amount;
}

function startGame(room) {
  const board = deepClone(BOARD_TEMPLATE).map((t, idx) => ({
    ...t,
    // ensure index exists for client logic
    index: (typeof t.index === "number") ? t.index : idx,
    owner: null,
    houses: (t.houses ?? 0),
    hotel: (t.hotel ?? false),
    mortgaged: (t.mortgaged ?? false)
  }));

  const players = room.players
    .slice()
    .sort((a,b)=>a.seat-b.seat)
    .map((p, i) => ({ 
      id: i,
      seat: p.seat,
      name: p.name,
      colorName: p.colorName,
      color: COLOR_MAP[p.colorName] || null,
      position: 0,
      money: 1500,
      inJail: false,
      jailTurns: 0,
      getOutOfJailCards: 0,
      properties: [],
      active: false
    }));

  const turnOrder = players.map(p => p.id);
  const state = {
    board,
    players,
    turnOrder,
    currentTurnPointer: 0,
    phase: "WAIT_ROLL", // WAIT_ROLL | BUY_DECISION | WAIT_ENDTURN
    pending: null,
    lastRoll: null,
    doublesStreak: 0
  };
  state.players[turnOrder[0]].active = true;

  room.state = state;
  room.started = true;
}

function serializeState(room) {
  return {
    board: room.state.board,
    players: room.state.players,
    turnOrder: room.state.turnOrder,
    currentTurnPointer: room.state.currentTurnPointer,
    phase: room.state.phase,
    pending: room.state.pending,
    lastRoll: room.state.lastRoll
  };
}

function broadcastState(room) {
  io.to(room.code).emit("state", serializeState(room));
}

function setTurn(room, pointer) {
  room.state.players.forEach(p => p.active = false);
  room.state.currentTurnPointer = pointer;
  const id = room.state.turnOrder[room.state.currentTurnPointer];
  if (room.state.players[id]) room.state.players[id].active = true;
}

function nextTurn(room) {
  const next = (room.state.currentTurnPointer + 1) % room.state.turnOrder.length;
  setTurn(room, next);
  room.state.phase = "WAIT_ROLL";
  room.state.lastRoll = null;
  room.state.pending = null;
  room.state.doublesStreak = 0;
}

function handleLanding(room, player, dice) {
  const tile = room.state.board[player.position];
  if (!tile) return;

  // GO: if landed directly, +200 (passing go handled in move)
  if (tile.type === "go") {
    give(player, 200);
    return;
  }

  // TAX
  if (tile.type === "tax" && tile.amount) {
    pay(player, tile.amount);
    return;
  }

  // CHANCE / COMMUNITY: no-op for now (still synced)
  if (tile.type === "chance" || tile.type === "community-chest") {
    return;
  }

  if (tile.type === "property" || tile.type === "airport" || tile.type === "utility") {
    if (tile.owner == null) {
      // offer to buy
      room.state.phase = "BUY_DECISION";
      room.state.pending = { tileIndex: tile.index };
      io.to(room.code).emit("buyOffer", {
        seat: player.seat,
        tileIndex: tile.index,
        name: tile.name,
        type: tile.type,
        price: tile.price,
        baseRent: tile.baseRent || 0
      });
      return;
    }

    // owned by self: nothing
    if (tile.owner === player.id) return;

    // pay rent
    const owner = room.state.players[tile.owner];
    if (!owner) return;
    if (tile.mortgaged) return;

    let rent = 0;
    if (tile.type === "property") {
      // simple: baseRent or rents[0] if exists, ignore houses/hotel for now
      rent = tile.baseRent ?? (Array.isArray(tile.rents) ? tile.rents[0] : 0);
    } else if (tile.type === "airport") {
      rent = computeAirportRent(room, tile.owner);
    } else if (tile.type === "utility") {
      rent = computeUtilityRent(room, tile.owner, dice.total);
    }

    pay(player, rent);
    give(owner, rent);
    return;
  }
}

function doRoll(room, seat) {
  const cs = currentSeat(room);
  const currentPlayer = room.state.players[cs];
  if (!currentPlayer) return;

  const d1 = 1 + Math.floor(Math.random()*6);
  const d2 = 1 + Math.floor(Math.random()*6);
  const total = d1 + d2;
  const doubles = d1 === d2;

  room.state.lastRoll = { d1, d2, total, doubles };
  io.to(room.code).emit("diceRoll", room.state.lastRoll);

  // move
  const oldPos = currentPlayer.position;
  let newPos = (oldPos + total) % room.state.board.length;
  // passed GO?
  if (oldPos + total >= room.state.board.length) {
    give(currentPlayer, 200);
  }
  currentPlayer.position = newPos;

  // landing may set BUY_DECISION
  room.state.phase = "WAIT_ENDTURN";
  room.state.pending = null;

  handleLanding(room, currentPlayer, room.state.lastRoll);

  // If buy decision triggered, keep phase BUY_DECISION (set in handler)
  if (room.state.phase === "BUY_DECISION") {
    // do NOT resolve doubles yet until decision
    return;
  }

  // if doubles, allow another roll (still require end turn? We'll allow immediate roll again)
  if (doubles) {
    room.state.doublesStreak += 1;
    // allow roll again
    room.state.phase = "WAIT_ROLL";
  } else {
    room.state.doublesStreak = 0;
    room.state.phase = "WAIT_ENDTURN";
  }
}

function resolveBuy(room, seat, decision) {
  const cs = currentSeat(room);
  const player = room.state.players[cs];
  if (!player || player.seat !== seat) return;
  if (room.state.phase !== "BUY_DECISION" || !room.state.pending) return;
  const tile = room.state.board[room.state.pending.tileIndex];
  if (!tile) return;

  if (decision === "BUY") {
    if (tile.owner == null && player.money >= tile.price) {
      pay(player, tile.price);
      tile.owner = player.id;
      if (!player.properties.includes(tile.index)) player.properties.push(tile.index);
    }
  } else {
    // skip: no-op (auction mode not implemented server-side yet)
  }

  // After decision: if doubles then allow roll again else wait endturn
  const doubles = room.state.lastRoll?.doubles;
  if (doubles) {
    room.state.phase = "WAIT_ROLL";
  } else {
    room.state.phase = "WAIT_ENDTURN";
  }
  room.state.pending = null;
}

io.on("connection", (socket) => {
  socket.data.roomCode = null;
  socket.data.seat = null;

  socket.on("createRoom", ({ name, colorName }) => {
    const code = uniqueCode(rooms);
    const room = {
      code,
      started: false,
      hostSeat: 0,
      players: [], // lobby players
      socketsBySeat: new Map(),
      state: null
    };
    rooms.set(code, room);

    const seat = 0;
    room.players.push({ seat, name: String(name||"Host").slice(0,15), colorName: String(colorName||"Red") });
    room.socketsBySeat.set(seat, socket.id);

    socket.join(code);
    socket.data.roomCode = code;
    socket.data.seat = seat;

    socket.emit("roomJoined", { code, seat, isHost: true, room: publicRoom(room) });
    io.to(code).emit("roomUpdate", publicRoom(room));
  });

  socket.on("joinRoom", ({ code, name, colorName }) => {
    const clean = String(code||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);
    const room = rooms.get(clean);
    if (!room) return socket.emit("roomError", "Room not found.");
    if (room.started) return socket.emit("roomError", "Game already started.");
    if (room.players.length >= 4) return socket.emit("roomError", "Room is full.");

    const used = new Set(room.players.map(p=>p.seat));
    let seat = 0;
    while (used.has(seat)) seat++;

    room.players.push({ seat, name: String(name||"Player").slice(0,15), colorName: String(colorName||"Red") });
    room.socketsBySeat.set(seat, socket.id);

    socket.join(clean);
    socket.data.roomCode = clean;
    socket.data.seat = seat;

    socket.emit("roomJoined", { code: clean, seat, isHost: false, room: publicRoom(room) });
    io.to(clean).emit("roomUpdate", publicRoom(room));
  });

  socket.on("hostStart", ({ startingMoney }) => {
    const code = socket.data.roomCode;
    const seat = socket.data.seat;
    if (!code) return;
    const room = rooms.get(code);
    if (!room) return;
    if (seat !== room.hostSeat) return;

    startGame(room);
    // apply starting money if provided
    if (Number.isFinite(startingMoney)) {
      room.state.players.forEach(p => p.money = startingMoney);
    }

    io.to(room.code).emit("onlineStartGame", publicRoom(room));
    broadcastState(room);
  });

  socket.on("action", ({ type, payload }) => {
    const code = socket.data.roomCode;
    const seat = socket.data.seat;
    if (!code) return;
    const room = rooms.get(code);
    if (!room || !room.started || !room.state) return;

    const cs = currentSeat(room);
    const currentPlayer = room.state.players[cs];
    if (!currentPlayer) return;
    // only current player can act
    if (currentPlayer.seat !== seat) return;

    const t = String(type||"").toUpperCase();

    if (t === "ROLL") {
      if (room.state.phase !== "WAIT_ROLL") return;
      doRoll(room, seat);
      broadcastState(room);
      return;
    }

    if (t === "END_TURN") {
      if (room.state.phase === "BUY_DECISION") return;
      if (room.state.phase === "WAIT_ROLL") return; // must roll first unless doubles allows? keep simple
      nextTurn(room);
      broadcastState(room);
      return;
    }

    if (t === "BUY_DECISION") {
      const decision = payload?.decision;
      resolveBuy(room, seat, decision);
      broadcastState(room);
      return;
    }
  });

  socket.on("disconnect", () => {
    const code = socket.data.roomCode;
    const seat = socket.data.seat;
    if (!code) return;
    const room = rooms.get(code);
    if (!room) return;

    room.players = room.players.filter(p=>p.seat !== seat);
    room.socketsBySeat.delete(seat);

    // if host left before start, promote lowest seat
    if (!room.started) {
      if (seat === room.hostSeat) {
        const next = room.players.slice().sort((a,b)=>a.seat-b.seat)[0];
        room.hostSeat = next ? next.seat : 0;
      }
      if (room.players.length === 0) rooms.delete(code);
      else io.to(code).emit("roomUpdate", publicRoom(room));
    } else {
      // in-game disconnect: keep player but mark? (not implemented)
      io.to(code).emit("roomUpdate", publicRoom(room));
    }
  });
});

server.listen(PORT, () => console.log("Server running on", PORT));