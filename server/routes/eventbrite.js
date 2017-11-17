const router = require('express').Router()
const eventbriteController = require('../controllers/eventbrite')

router.get('/', eventbriteController.events)
router.get('/token', eventbriteController.token)
router.get('/create', eventbriteController.create)

module.exports = router