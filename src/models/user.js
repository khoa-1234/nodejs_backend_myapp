"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,

      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      birthday: DataTypes.DATE,
      avatar: DataTypes.STRING,
      job_title: DataTypes.STRING,
      deparment: DataTypes.STRING,
      manager_id: DataTypes.BIGINT,
      phone: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      country: DataTypes.STRING,
      remember_token: DataTypes.STRING,
      active_code: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
