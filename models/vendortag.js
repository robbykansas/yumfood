'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // VendorTag.belongsTo(models.Tag)
      // VendorTag.belongsTo(models.Vendor)
    }
  };
  VendorTag.init({
    VendorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VendorTag',
  });
  return VendorTag;
};