'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.role, {
        foreignKey: 'roleId'
      });
    }
  };
  user.init({
    roleId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};