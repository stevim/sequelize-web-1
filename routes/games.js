const router = require('express').Router()
const gamesCtrl = require('../controllers/games.js')

router.post('/', gamesCtrl.create)

module.exports = router