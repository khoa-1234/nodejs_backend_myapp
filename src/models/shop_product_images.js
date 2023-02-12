"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_product_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_product_images.init(
    {
      product_id: DataTypes.BIGINT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "shop_product_images",
    }
  );
  return shop_product_images;
};
