"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_order_details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      order_id: {
        type: Sequelize.BIGINT,
      },
      product_id: {
        type: Sequelize.BIGINT,
      },
      quantity: {
        type: Sequelize.DECIMAL(18, 4),
      },
      unit_price: {
        type: Sequelize.DECIMAL(19, 4),
      },
      discount_percentage: {
        type: Sequelize.FLOAT,
      },
      discount_am: {
        type: Sequelize.DOUBLE,
      },
      order_detail_status: {
        type: Sequelize.STRING,
      },
      data_allocated: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("shop_order_details");
  },
};
