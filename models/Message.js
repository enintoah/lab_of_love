const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message:{
      text: { type:String, required:true }
  },
  users:[{
      user: { type:mongoose.Schema.Types.ObjectId, ref:'User', required:true }
  }],
  sender: { type:mongoose.Schema.Types.ObjectId, ref:'User', required:true }
},
{
  timestamps: true
});

module.exports = Message = mongoose.model('Message', MessageSchema)