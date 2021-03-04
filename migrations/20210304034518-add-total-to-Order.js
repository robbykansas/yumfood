'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'Total', {type: Sequelize.INTEGER})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'Total')
  }
};
