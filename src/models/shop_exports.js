"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_exports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_exports.init(
    {
      store_id: DataTypes.BIGINT,
      employee_id: DataTypes.BIGINT,
      exports_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "shop_exports",
    }
  );
  return shop_exports;
};
