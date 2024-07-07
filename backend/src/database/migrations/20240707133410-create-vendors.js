'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('vendors', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        uuid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING
        },
        unit_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'units',
            key: 'id'
          }
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: true,
          type: DataTypes.DATE
        },
        deleted_at: {
          allowNull: true,
          type: DataTypes.DATE
        }
      })

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('vendors');
  }
};