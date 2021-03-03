'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'DishId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Dishes'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'DishId')
  }
};
