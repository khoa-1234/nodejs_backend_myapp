"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_orders.init(
    {
      employee_id: DataTypes.BIGINT,
      customer_id: DataTypes.BIGINT,
      order_date: DataTypes.DATE,
      shipped_date: DataTypes.DATE,
      ship_name: DataTypes.STRING,
      ship_address1: DataTypes.STRING,
      ship_address2: DataTypes.STRING,
      ship_city: DataTypes.STRING,
      ship_state: DataTypes.STRING,
      ship_postal_code: DataTypes.STRING,
      ship_country: DataTypes.STRING,
      shipping_fee: DataTypes.DECIMAL(19, 4),
      payment_type_id: DataTypes.BIGINT,
      paid_date: DataTypes.DATE,
      order_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "shop_orders",
    }
  );
  return shop_orders;
};
