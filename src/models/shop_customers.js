"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop_customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop_customers.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      last_name: DataTypes.TEXT,
      first_name: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      email: DataTypes.STRING,
      birthday: DataTypes.DATE,
      avatar: DataTypes.STRING,
      code: DataTypes.STRING,
      company: DataTypes.STRING,
      phone: DataTypes.STRING,
      billing_address: DataTypes.STRING,
      shipping_address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      country: DataTypes.STRING,
      remember_token: DataTypes.STRING,
      activate_code: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "shop_customers",
    }
  );
  return shop_customers;
};
