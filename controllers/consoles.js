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
          as: "exclusiveGames"
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

const associateGame = async (req, res) => {
  try {
    const { consoleId, gameId } = req.params
    const association = await consolegame.create({
      consoleId: consoleId,
      gameId: gameId
    })
    res.status(200).json(association)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteConsole,
  addExclusive,
  associateGame
}