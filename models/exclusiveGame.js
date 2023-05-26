'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExclusiveGame extends Model {
    static associate(models) {
      ExclusiveGame.belongsTo(models.Console, {
        foreignKey: 'consoleId',
      })
    }
  }
  ExclusiveGame.init({
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    consoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Consoles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ExclusiveGame',
  });
  return ExclusiveGame;
};