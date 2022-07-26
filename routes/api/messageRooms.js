const express = require('express');
const router = express.Router();
const passport = require('passport');
const MessageRoom = require('../../models/MessageRoom')

router.get("/test", (req, res) => res.json({ msg: "This is the messages route" }));

router.post('', (req, res) => {

})

module.exports = router;