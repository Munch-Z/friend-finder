const express = require('express');
const friends = require('../data/friends');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

function findFriend(user) {
    let totalDifference = Number.MAX_SAFE_INTEGER - 1;
    let index;
    
    for (let i = 0; i < friends.length; i++) {
        let newDifference = 0;
        const scores = friends[i].scores;
    
        for (let j = 0; j < scores.length; j++) {
            newDifference += Math.abs(parseInt(user.scores[j]) - parseInt(scores[j]));
        }
    
    
        if (newDifference < totalDifference) {
            totalDifference = newDifference;
            index = i;
        }
    
        newDifference = 0;
    }

    return index;
}


router.route('/friends')
    .get((req, res) => {
        res.json(friends);
    })
    .post((req, res) => {
        const userData = req.body;
        
        const index = findFriend(userData);

        friends.push(userData);
        res.json(friends[index]);
    })

module.exports = router;