// const socket = io();
// socket.on('welcomemessage', (data) => {
//     console.log(data);
// });
// socket.emit("connected","The client connected");
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
 
// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
//  console.log(username,room);
const socket = io();
 
// Join chatroom
socket.emit('joinRoom', { username, room });
