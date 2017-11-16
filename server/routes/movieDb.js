const express = require('express');
const router = express.Router();
const movie = require('../controllers/movieDb')

router.get('/', movie.playNow)

module.exports = router;
