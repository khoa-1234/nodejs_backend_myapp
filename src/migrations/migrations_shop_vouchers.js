"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shop_vouchers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      voucher_code: {
        type: Sequelize.STRING,
      },
      voucher_name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      uses: {
        type: Sequelize.INTEGER,
      },
      max_uses: {
        type: Sequelize.INTEGER,
      },
      max_uses_user: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      discount_am: {
        type: Sequelize.DOUBLE,
      },
      is_fixed: {
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },

      end_date: {
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
    await queryInterface.dropTable("shop_vouchers");
  },
};
