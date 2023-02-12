"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_imports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_imports.init(
    {
      store_id: DataTypes.BIGINT,
      employee_id: DataTypes.BIGINT,
      import_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "shop_imports",
    }
  );
  return shop_imports;
};
