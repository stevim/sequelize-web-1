const router = require('express').Router()
const gamesCtrl = require('../controllers/games.js')

router.get('/', gamesCtrl.index)
router.post('/', gamesCtrl.create)
router.put('/:gameId', gamesCtrl.update)
router.delete('/:gameId', gamesCtrl.delete)

module.exports = router