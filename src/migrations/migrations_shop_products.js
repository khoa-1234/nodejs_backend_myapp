"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      product_code: {
        type: Sequelize.STRING,
      },
      product_name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      short_description: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      standaed_cost: {
        type: Sequelize.DECIMAL(19, 4),
      },
      list_price: {
        type: Sequelize.DECIMAL(19, 4),
      },
      quantity_per_unit: {
        type: Sequelize.STRING,
      },
      discontinued: {
        type: Sequelize.INTEGER,
      },

      is_featured: {
        type: Sequelize.STRING,
      },

      is_new: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.BIGINT,
      },
      supplier_id: {
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("shop_products");
  },
};
