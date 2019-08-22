const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public')));

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

router.get('*', (req, res) => {
    res.redirect('/home');
})


module.exports = router;