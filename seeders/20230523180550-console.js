'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Consoles', [{
      name: 'Gamecube',
      releaseYear: 2001,
      company: 'Nintendo',
      createdAt: date,
      updatedAt: date,
    }, {
      name: 'Playstation',
      releaseYear: 1994,
      company: 'Sony',
      createdAt: date,
      updatedAt: date,
    }, {
      name: 'XBox',
      releaseYear: 2001,
      company: 'Microsoft',
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Consoles', null, {})
  }
};
