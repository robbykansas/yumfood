'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VendorTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VendorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Vendors'
          },
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tags'
          }, 
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VendorTags');
  }
};