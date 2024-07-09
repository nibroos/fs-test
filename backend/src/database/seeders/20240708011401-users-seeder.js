'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction();
    const bcrypt = require('bcrypt');

    const { randomUUID } = require('crypto');

    try {
      await queryInterface.bulkInsert('users', [
        {
          first_name: 'Nibros',
          uuid: randomUUID(),
          email: 'a@a.com',
          password: await bcrypt.hash('Zxcvbnm123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Admin',
          uuid: randomUUID(),
          email: 'admin@a.com',
          password: await bcrypt.hash('Zxcvbnm123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
      ], {});

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
