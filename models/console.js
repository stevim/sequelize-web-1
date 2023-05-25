'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Console extends Model {
    static associate(models) {
      Console.hasMany(models.ExclusiveGame, {
        foreignKey: 'consoleId',
        as: 'exclusiveGames'
      }),
      Console.belongsToMany(models.Game, {
        as: 'games',
        through: models.ConsoleGame,
        foreignKey: 'consoleId'
      })
    }
  }
  Console.init({
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Console',
  });
  return Console;
};