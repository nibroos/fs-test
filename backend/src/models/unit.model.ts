import { Sequelize, DataTypes, Model } from 'sequelize';
import { Unit } from '@/interfaces/units.interface';
import { VendorModel } from './vendor.model';


export class UnitModel extends Model<Unit> implements Unit {
  public id!: number;
  public uuid!: string;
  public name!: string;

  toJSON() {
    return {
      ...this.get(),
      id: undefined,
    }
  }
}

export default function (sequelize: Sequelize): typeof UnitModel {
  UnitModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'units',
      timestamps: true,
      underscored: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );

  return UnitModel;
}
