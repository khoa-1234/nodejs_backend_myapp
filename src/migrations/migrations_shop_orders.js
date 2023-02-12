"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      employee_id: {
        type: Sequelize.BIGINT,
      },
      customer_id: {
        type: Sequelize.BIGINT,
      },
      order_date: {
        type: Sequelize.DATE,
      },
      shipped_date: {
        type: Sequelize.DATE,
      },
      ship_name: {
        type: Sequelize.STRING,
      },

      ship_address1: {
        type: Sequelize.STRING,
      },
      ship_address2: {
        type: Sequelize.STRING,
      },
      ship_city: {
        type: Sequelize.STRING,
      },
      ship_state: {
        type: Sequelize.STRING,
      },
      ship_postal_code: {
        type: Sequelize.STRING,
      },
      ship_country: {
        type: Sequelize.STRING,
      },
      shipping_fee: {
        type: Sequelize.DECIMAL(19, 4),
      },
      payment_type_id: {
        type: Sequelize.BIGINT,
      },
      paid_date: {
        type: Sequelize.DATE,
      },
      order_status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("shop_orders");
  },
};
