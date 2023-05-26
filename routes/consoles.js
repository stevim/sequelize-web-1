const router = require('express').Router()

const consolesCtrl = require('../controllers/consoles.js')


router.get('/', consolesCtrl.index)
router.get('/:consoleId', consolesCtrl.show)
router.get('/:consoleId/exclusiveGames', consolesCtrl.indexExclusives)
router.get('/:consoleId/games', consolesCtrl.indexGamesByConsole)
router.post('/', consolesCtrl.create)
router.post('/:consoleId/exclusiveGames', consolesCtrl.addExclusive)
router.post('/:consoleId/games/:gameId', consolesCtrl.associateGame)
router.put('/:consoleId', consolesCtrl.update)
router.put('/:consoleId/exclusiveGames/:exclusiveGamesId', consolesCtrl.updateExclusive)
router.delete('/:consoleId', consolesCtrl.delete)
router.delete('/:consoleId/exclusiveGames/:exclusiveGameId', consolesCtrl.deleteExclusive)
router.delete('/:consoleId/games/:gameId', consolesCtrl.deleteAssociation)


module.exports = router