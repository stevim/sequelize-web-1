'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsToMany(models.Console, {
        as: 'consoles',
        through: models.ConsoleGame,
        foreignKey: 'gameId'
      })
    }
  }
  Game.init({
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};