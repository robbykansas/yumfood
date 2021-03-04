'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsTo(models.Vendor)
      Dish.hasMany(models.Order)
    }
  };
  Dish.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: 'name cannot be empty'}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: 'price must be in numeric'},
        min: {
          msg: 'price must be greater than 0',
          args: [0]
        }
      }
    },
    VendorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};