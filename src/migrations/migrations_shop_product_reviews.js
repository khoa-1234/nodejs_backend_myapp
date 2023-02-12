"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_product_reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      product_id: {
        type: Sequelize.BIGINT,
      },
      customer_id: {
        type: Sequelize.BIGINT,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      comment: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("shop_product_reviews");
  },
};
