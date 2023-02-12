"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_product_discounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_product_discounts.init(
    {
      product_id: DataTypes.BIGINT,
      discount_name: DataTypes.STRING,
      discount_am: DataTypes.DOUBLE,
      is_fixed: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "shop_product_discounts",
    }
  );
  return shop_product_discounts;
};
