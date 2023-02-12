"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role_permission.init(
    {
      role_permission_id: DataTypes.BIGINT,
      permission_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "role_permission",
    }
  );
  return role_permission;
};
