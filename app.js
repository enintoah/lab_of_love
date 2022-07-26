const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;

const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const userProfiles = require("./routes/api/userProfiles")
const messages = require('./routes/api/messages');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

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
  
  socket.on('setup', () => {
    // socket.emit('connected')
    console.log('setup worked')
  })
})



