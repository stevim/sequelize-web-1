'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConsoleGame extends Model {
    static associate(models) {
    }
  }
  ConsoleGame.init({
    consoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Consoles',
        key: 'id'
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Games',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ConsoleGame',
  });
  return ConsoleGame;
};