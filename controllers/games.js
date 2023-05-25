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

module.exports = {
  create,
}