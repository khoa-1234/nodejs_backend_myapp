"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_order_details.init(
    {
      order_id: DataTypes.BIGINT,
      product_id: DataTypes.BIGINT,
      quantity: DataTypes.DECIMAL(18, 4),
      unit_price: DataTypes.DECIMAL(19, 4),
      discount_percentage: DataTypes.FLOAT,
      discount_am: DataTypes.DOUBLE,
      order_detail_status: DataTypes.STRING,
      data_allocated: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "shop_order_details",
    }
  );
  return shop_order_details;
};
