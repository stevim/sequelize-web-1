const { Console } = require('../models')

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
    const consoles = await Console.findAll()
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





module.exports = {
  create,
  index,
  update,
  delete: deleteConsole,
}