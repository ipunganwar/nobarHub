const express = require('express');
const router = express.Router();
const movie = require('../controllers/movieDb')

router.get('/id', movie.playNowId)
router.get('/en', movie.playNowEn)
router.get('/genres', movie.genres)

module.exports = router;
