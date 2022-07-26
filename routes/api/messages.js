const express = require('express');
const router = express.Router();
const Message = require('../../models/Message')
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the messages route" }));

router.post('', (req, res) => {

})

module.exports = router;