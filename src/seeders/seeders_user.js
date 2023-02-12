"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Khoa",
        password: "cc",
        email: "dangkhoa@gmail.com",
        firstName: "Dang",
        lastName: "Khoa",
        address: "everyone",
        gender: 1,
        birthday: "2001/02/22",
        avatar: "",
        job_title: "admin",
        deparment: "",
        manager_id: "",
        phone: "0395708037",
        city: "binhDuong",
        state: "",
        postal_code: "",
        country: "VietNam",
        remember_token: "",
        active_code: "",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
