"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },

      company: {
        type: Sequelize.STRING,
      },

      phone: {
        type: Sequelize.STRING,
      },
      billing_address: {
        type: Sequelize.STRING,
      },
      shipping_address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      remember_token: {
        type: Sequelize.STRING,
      },
      activate_code: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("shop_customers");
  },
};
