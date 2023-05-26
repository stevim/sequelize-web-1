const { Game } = require('../models')

const create = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.status(200).json(game)
  } catch (err) {
    console.log(err)    
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const games = await Game.findAll()
    res.status(200).json(games)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const game = await Game.update(
      req.body,
      { where: { id: req.params.gameId }, returning: true }
    )
    res.status(200).json(game)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteGame = async (req, res) => {
  try {
    await Game.destroy(
      { where: { id: req.params.gameId } }
    )
    res.status(200)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteGame,
}