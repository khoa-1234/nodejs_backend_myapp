"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_export_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_export_details.init(
    {
      export_id: DataTypes.BIGINT,
      product_id: DataTypes.BIGINT,
      quantity: DataTypes.DECIMAL(18, 4),
      unit_price: DataTypes.DECIMAL(19, 4),
    },
    {
      sequelize,
      modelName: "shop_export_details",
    }
  );
  return shop_export_details;
};
