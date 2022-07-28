const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: { type:String, required:true },
  recipient:{ type: Schema.Types.ObjectId, ref:'users', required: true},
  sender: { type: Schema.Types.ObjectId, ref:'users', required:true }
},
{
  timestamps: true
});

module.exports = Message = mongoose.model('Message', MessageSchema)