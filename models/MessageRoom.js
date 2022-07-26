const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageRoomSchema = new Schema({
  users:[{
      user: { type:mongoose.Schema.Types.ObjectId, ref:'User', required:true }
  }]
},
{
  timestamps: true
});

module.exports = MessageRoom = mongoose.model('MessageRoom', MessageRoomSchema)