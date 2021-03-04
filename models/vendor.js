'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Dish)
      Vendor.belongsToMany(models.Tag, {through: models.VendorTag})
    }
  };
  Vendor.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: 'name cannot be empty'}
      }
    },
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};