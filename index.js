const express = require('express');
const path = require('path');
const http = require('http');
const socketio=require('socket.io');
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
const io=socketio(server);
io.on('connection', (socket)=>{
    // socket represents an actual user
    // emit a endt to the client 
    socket.emit("welcomemessage", "Welcome to the chat");
    socket.on("connected", (data)=>{
        console.log(data);
        console.log(socket.id + " connected");
    })
});
const port = 3000;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})