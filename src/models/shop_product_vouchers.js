"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_product_vouchers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_product_vouchers.init(
    {
      product_id: DataTypes.BIGINT,
      voucher_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "shop_product_vouchers",
    }
  );
  return shop_product_vouchers;
};
