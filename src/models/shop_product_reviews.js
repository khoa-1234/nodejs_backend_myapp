"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_product_reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_product_reviews.init(
    {
      product_id: DataTypes.BIGINT,
      customer_id: DataTypes.BIGINT,
      rating: DataTypes.FLOAT,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "shop_product_reviews",
    }
  );
  return shop_product_reviews;
};
