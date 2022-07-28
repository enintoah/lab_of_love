const express = require('express');
const router = express.Router();
const Message = require('../../models/Message')
const passport = require('passport');

router.post('/', (req, res) => {
  Message.find({$or: [{recipient: req.body.user1, sender: req.body.user2}, {recipient: req.body.user2, sender: req.body.user1}]}).sort({"createdAt": 1}).limit(20).then(mes => {
    return res.json(mes)
  })
})

router.patch('/:message_id', (req, res) => {
  Message.findOne({ _id: req.params.message_id }).then(message => {
    message.message = req.body.message;
    message.save()
      .then(() => { return res.json(message) })
      .catch(err => { return res.status(400).json(err) })
  })
  .catch(err => { return res.status(400).json(err) })
})

router.post('/create', (req, res) => {
  const newMessage = new Message({
    message: req.body.message,
    recipient: req.body.recipient,
    sender: req.body.sender
  })

  newMessage.save()
    .then(message => {
      return res.json(message);
    })
    .catch(err => {
      return res.status(400).json(err)
    })
})

router.delete('/:message_id', (req, res) => {
  Message.findOneAndDelete({ _id: req.params.message_id }).then(() => {
    const success = { msg: "successfully deleted "};
    return res.json(success);
  })
  .catch(err => {
    return res.status(400).json(err)
  })
})

module.exports = router;