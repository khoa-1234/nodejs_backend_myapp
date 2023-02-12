"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_import_details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      import_id: {
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
    await queryInterface.dropTable("shop_import_details");
  },
};
