'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction();

    const { randomUUID } = require('crypto');
    const { faker } = require('@faker-js/faker');

    try {
      let newUnitData = [];
      let unitsTotal = 10
      for (let i = 0; i < unitsTotal; i++) {
        const seedData = {
          name: 'Siloam ' + faker.location.country(),
          uuid: randomUUID(),
          created_at: new Date(),
          updated_at: new Date()
        };
        newUnitData.push(seedData);
      }

      await queryInterface.bulkInsert('units', newUnitData, {});

      const allUnits = await queryInterface.sequelize.query('SELECT id FROM units', { type: queryInterface.sequelize.QueryTypes.SELECT });

      let newVendorData = []
      for (let i = 0; i < allUnits.length; i++) {

        let randomVendor = Math.floor(Math.random() * 10);
        for (let j = 0; j < randomVendor; j++) {

          // get random unit id 1 - 10
          let randomUnitId = allUnits[Math.floor(Math.random() * allUnits.length)].id;

          const seedData = {
            name: faker.company.name() + faker.location.country(),
            uuid: randomUUID(),
            unit_id: randomUnitId,
            address: faker.location.streetAddress(),
            created_at: new Date(),
            updated_at: new Date()
          };
          newVendorData.push(seedData);
        }
      }

      await queryInterface.bulkInsert('vendors', newVendorData, {});

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
