import { Sequelize, DataTypes, Model } from 'sequelize';
import { Vendor } from '@/interfaces/vendors.interface';
import { UnitModel } from './unit.model';

export class VendorModel extends Model<Vendor> implements Vendor {
  public uuid!: string;
  public name!: string;
  public unit_id!: number | string;
  public address?: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  toJSON() {
    return {
      ...this.get(),
      id: undefined,
      unit_id: undefined
    }
  }
}

export default function (sequelize: Sequelize): typeof VendorModel {
  VendorModel.init(
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
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      unit_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'units',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      tableName: 'vendors',
      timestamps: true,
      underscored: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );

  VendorModel.belongsTo(UnitModel, { foreignKey: 'unit_id', as: 'unit' });
  UnitModel.hasMany(VendorModel, { foreignKey: 'unit_id', as: 'vendors' });


  return VendorModel;
}
