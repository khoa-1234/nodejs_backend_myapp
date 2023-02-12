"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_has_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_has_permission.init(
    {
      user_id: DataTypes.INTEGER,
      permission_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "user_has_permission",
    }
  );
  return user_has_permission;
};
