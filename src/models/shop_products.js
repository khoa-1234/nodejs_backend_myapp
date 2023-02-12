"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_products.init(
    {
      product_code: DataTypes.STRING,
      product_name: DataTypes.STRING,
      image: DataTypes.STRING,
      short_description: DataTypes.STRING,
      description: DataTypes.TEXT,
      standaed_cost: DataTypes.DECIMAL(19, 4),
      list_price: DataTypes.DECIMAL(19, 4),
      quantity_per_unit: DataTypes.STRING,
      discontinued: DataTypes.INTEGER,
      is_featured: DataTypes.STRING,
      is_new: DataTypes.STRING,
      category_id: DataTypes.BIGINT,
      supplier_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "shop_products",
    }
  );
  return shop_products;
};
