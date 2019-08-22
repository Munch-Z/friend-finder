const express = require('express');
const friends = require('../data/friends');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.route('/friends')
    .get((req, res) => {
        res.json(friends);
    })
    .post((req, res) => {
        const user = req.body;
        let totalDifference = Number.MAX_SAFE_INTEGER - 1;
        let index;

        for (let i = 0; i < friends.length; i++) {
            let newDifference = 0;
            let scores = friends[i].scores;

            for (let j = 0; j < scores.length; j++) {
                newDifference += Math.abs(user.scores[j] - scores[j]);
            }


            if (newDifference < totalDifference) {
                totalDifference = newDifference;
                index = i;
            }

            newDifference = 0;
        }

        res.json(friends[index]);
    })

module.exports = router;