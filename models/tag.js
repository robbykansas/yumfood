'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Vendor, {through: models.VendorTag})
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: 'name cannot be empty'}
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};