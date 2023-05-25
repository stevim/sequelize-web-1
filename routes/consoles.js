const router = require('express').Router()

const consolesCtrl = require('../controllers/consoles.js')


router.get('/', consolesCtrl.index)
router.post('/', consolesCtrl.create)
router.post('/:consoleId/exclusiveGames', consolesCtrl.addExclusive)
router.post('/:consoleId/games/:gameId', consolesCtrl.associateGame)
router.put('/consoleId', consolesCtrl.update)
router.delete('/consoleId', consolesCtrl.delete)


module.exports = router