'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Dishes', 'VendorId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Vendors'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Dishes', 'VendorId')
  }
};
