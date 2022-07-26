const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const path = require('path');

const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const userProfiles = require("./routes/api/userProfiles")
const messages = require('./routes/api/messages');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/user_profile", userProfiles)
app.use("/api/messages", messages)
app.use(passport.initialize());
require('./config/passport')(passport);
const port = process.env.PORT || 5050;
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000"
  }
})

io.on("connection", (socket) => {
  console.log('connected to socket.io');

  socket.on('setup', (userData) => {
    socket.join(userData.id);
    console.log('joined room: ' + userData.id)
  })

  socket.on('join chat', (room) => {
    socket.join(room);
    console.log(room)
  })

  socket.on('new message', (message) => {
    console.log(message.sender);
    console.log(message.message)
    socket.to(message.sender).emit('receive message', message)
  })

  socket.on("disconnect", () => {
    console.log('socket disconnected')
  })

  socket.on('delete message', (message) => {
    console.log('DELETE MESSAGE')
    socket.to(message.sender).emit('remove message', message._id)
  })
})



