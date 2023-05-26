const { Console, ExclusiveGame, Game, ConsoleGame } = require('../models')

const create = async (req, res) => {
  try {
    const console = await Console.create(req.body)
    res.status(200).json(console)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const consoles = await Console.findAll({
      include: [
        {
          model: ExclusiveGame,
          as: 'exclusiveGames'
        }, {
          model: Game,
          as: 'games',
          through: { attributes: [] }
        }
      ]
    })
    res.status(200).json(consoles)
  } catch (err) {
    res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const console = await Console.findByPk(
      req.params.consoleId, 
      {
        include: [{
          model: ExclusiveGame,
          as: 'exclusiveGames'
        },{
          model: Game,
          as: 'games',
          through: { attributes: []}
        }],
      }
    )
    res.status(200).json(console)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const console = await Console.findByPk(req.params.consoleId)
    console.set(req.body)
    await console.save()
    res.status(200).json(console)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteConsole = async (req, res) => {
  try {
    const console = await Console.findByPk(req.params.consoleId)
    await console.destroy()
    res.status(200).json(console)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addExclusive = async (req, res) => {
  try {
    req.body.consoleId = req.params.consoleId
    const exclusive = await ExclusiveGame.create(req.body)
    res.status(200).json(exclusive)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const indexExclusives = async (req, res) => {
  try {
    const exclusives = await ExclusiveGame.findAll({
      where: { consoleId: req.params.consoleId }
    })
    res.status(200).json(exclusives)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const updateExclusive = async (req, res) => {
  try {
    req.body.exclusiveGameId = req.params.exclusiveGameId
    const exclusive = await ExclusiveGame.update(
      req.body,
      {
        where: { id: req.params.exclusiveGameId },
        returning: true
      }
    )
    res.status(200).json(exclusive)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteExclusive = async (req, res) => {
  try {
    await ExclusiveGame.destroy({
      where: { id: req.params.exclusiveGameId }
    })
    res.status(200).json(ExclusiveGame)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const associateGame = async (req, res) => {
  try {
    const { consoleId, gameId } = req.params
    const association = await ConsoleGame.create({
      consoleId: consoleId,
      gameId: gameId
    })
    res.status(200).json(association)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const indexGamesByConsole = async (req, res) => {
  try {
    const gamesByConsole = await ConsoleGame.findAll({
      where: { consoleId: req.params.consoleId }
    })
    res.status(200).json(gamesByConsole)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)    
  }
}

const deleteAssociation = async (req, res) => {
  try {
    const { consoleId, gameId } = req.params
    await ConsoleGame.destroy({
      where: {
        consoleId: req.params.consoleId,
        gameId: req.params.gameId
      }
    })
    res.status(200)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)    
  }
}
module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteConsole,
  addExclusive,
  indexExclusives,
  updateExclusive,
  deleteExclusive,
  associateGame,
  indexGamesByConsole,
  deleteAssociation,
}