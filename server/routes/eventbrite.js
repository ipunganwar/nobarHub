const router = require('express').Router()
const eventbriteController = require('../controllers/eventbrite')

router.get('/', eventbriteController.events)
router.get('/aboutme', eventbriteController.about_me)
router.post('/create', eventbriteController.create)
router.get('/me', eventbriteController.event_me)

module.exports = router