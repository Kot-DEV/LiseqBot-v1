const express = require('express');
const router = express.Router();

router.get('/index.html', (req, res) => {
    res.render('home');
});
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/aktualizacje.html', (req, res) => {
    res.render('aktualizacje');
});
router.get('/kontakt.html', (req, res) => {
    res.render('kontakt');
});
module.exports = router; 9