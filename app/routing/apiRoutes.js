const express = require('express');
const friends = require('../data/friends');
const router = express.Router();


router.route('/friends')
.get( (req, res) => {
    res.json(friends);
})
.post((req, res) => {
    //TODO BIDNESS LOGIC
})

module.exports = router;