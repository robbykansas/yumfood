'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Dish)
    }
  };
  Order.init({
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: 'amount must be in numeric'},
        min: {
          args: 1,
          msg: 'amount must be greater than 1'
        }
      }
    },
    request: DataTypes.STRING,
    DishId: DataTypes.INTEGER,
    Total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};