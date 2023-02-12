"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_vouchers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_vouchers.init(
    {
      voucher_code: DataTypes.STRING,
      voucher_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      uses: DataTypes.INTEGER,
      max_uses: DataTypes.INTEGER,
      max_uses_user: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      discount_am: DataTypes.DOUBLE,
      is_fixed: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "shop_vouchers",
    }
  );
  return shop_vouchers;
};
