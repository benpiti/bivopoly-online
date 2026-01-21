import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.use(express.static(publicDir));
app.get("/", (req, res) => res.sendFile(path.join(publicDir, "index.html")));
app.get("/health", (req, res) => res.status(200).send("ok"));

const rooms = new Map();
function makeCode(len=6){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out="";
  for(let i=0;i<len;i++) out+=chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function createUniqueCode(){
  let c=makeCode();
  while(rooms.has(c)) c=makeCode();
  return c;
}
function publicPlayers(room){
  return room.players.map(p=>({
    name: p.name,
    seat: p.seat,
    isHost: p.isHost,
    colorName: p.colorName || null
  }));
}
function removePlayer(code, socketId){
  const room=rooms.get(code);
  if(!room) return;
  room.players=room.players.filter(p=>p.socketId!==socketId);
  if(room.hostId===socketId){
    const next=room.players.slice().sort((a,b)=>a.seat-b.seat)[0];
    if(next){
      room.hostId=next.socketId;
      room.players=room.players.map(p=>({...p, isHost:p.socketId===room.hostId}));
    }
  }
  if(room.players.length===0) rooms.delete(code);
}

io.on("connection",(socket)=>{
  socket.data.roomCode=null;

  socket.on("createRoom",({name})=>{
    const code=createUniqueCode();
    const room={
      hostId: socket.id,
      started: false,
      players: [{
        socketId: socket.id,
        name: String(name||"Host").slice(0,15),
        seat: 0,
        isHost: true,
        colorName: null
      }],
      lastSnapshot: null
    };
    rooms.set(code, room);
    socket.join(code);
    socket.data.roomCode=code;
    socket.emit("roomJoined",{code, seat:0, isHost:true, players:publicPlayers(room), started: room.started});
    io.to(code).emit("roomUpdate",{code, players:publicPlayers(room), started: room.started});
  });

  socket.on("joinRoom",({code,name, color})=>{
    const clean=String(code||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);
    const room=rooms.get(clean);
    if(!room) return socket.emit("roomError","Room not found.");
    if(room.players.length>=4) return socket.emit("roomError","Room is full (max 4).");

    const used=new Set(room.players.map(p=>p.seat));
    let seat=0; while(used.has(seat)) seat++;
    room.players.push({
      socketId: socket.id,
      name: String(name||"Player").slice(0,15),
      seat,
      isHost: false,
      colorName: color ? String(color).slice(0,20) : null
    });
    socket.join(clean); socket.data.roomCode=clean;
    socket.emit("roomJoined",{code:clean, seat, isHost:false, players:publicPlayers(room), started: room.started});
    io.to(clean).emit("roomUpdate",{code:clean, players:publicPlayers(room), started: room.started});
    if(room.lastSnapshot) socket.emit("hostState", room.lastSnapshot);
  });

  socket.on("setColor",({color})=>{
    const code=socket.data.roomCode;
    if(!code) return;
    const room=rooms.get(code); if(!room) return;
    const p = room.players.find(p=>p.socketId===socket.id);
    if(!p) return;
    p.colorName = color ? String(color).slice(0,20) : null;
    io.to(code).emit("roomUpdate",{code, players:publicPlayers(room), started: room.started});
  });

  socket.on("startGame",()=>{
    const code=socket.data.roomCode;
    if(!code) return;
    const room=rooms.get(code); if(!room) return;
    if(room.hostId!==socket.id) return;
    room.started = true;
    io.to(code).emit("gameStarted",{code, players:publicPlayers(room)});
    io.to(code).emit("roomUpdate",{code, players:publicPlayers(room), started: room.started});
  });

  socket.on("hostState",(snapshot)=>{
    const code=socket.data.roomCode;
    if(!code) return;
    const room=rooms.get(code); if(!room) return;
    if(room.hostId!==socket.id) return;
    room.lastSnapshot=snapshot;
    io.to(code).emit("hostState", snapshot);
  });

  socket.on("requestAction",({type, payload})=>{
    const code=socket.data.roomCode;
    if(!code) return;
    const room=rooms.get(code); if(!room) return;
    if(room.hostId===socket.id) return;
    const from=room.players.find(p=>p.socketId===socket.id);
    if(!from) return;
    io.to(room.hostId).emit("hostAction",{type:String(type||"").toUpperCase(), payload:payload??null, fromSeat:from.seat, fromName:from.name});
  });

  socket.on("disconnect",()=>{
    const code=socket.data.roomCode;
    if(!code) return;
    removePlayer(code, socket.id);
    const room=rooms.get(code);
    if(room){
      io.to(code).emit("roomUpdate",{code, players:publicPlayers(room), started: room.started});
      const hostPlayer=room.players.find(p=>p.socketId===room.hostId);
      if(hostPlayer){
        io.to(room.hostId).emit("roomJoined",{code, seat:hostPlayer.seat, isHost:true, players:publicPlayers(room), started: room.started});
      }
    }
  });
});

server.listen(PORT,()=>console.log("Server running on port", PORT));
