'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const Tutorial_User = tutorial.belongsTo(models.user, {
        foreignKey: 'user_id',
      });
    }
  };
  tutorial.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tutorial',
  });
  return tutorial;
};