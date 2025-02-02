import { Request } from 'express';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateVendorDto, UpdateVendorDto } from '@/dtos/vendors.dto';
import { Vendor } from '@/interfaces/vendors.interface';
import { PaginationRequestType, ResultCountType } from '@/type/RequestType';
import { QueryTypes } from 'sequelize';
import { Op } from 'sequelize';
import { VendorListFiltersType } from '@/type/filters/VendorFiltersType';
import { DataResponseType } from '@/type/ResponseType';
import { cloneObject, flattenObject } from '@/utils/objectFormat';
import { VendorModel } from '@/models/vendor.model';

@Service()
export class VendorService {
  public async findAllVendor(req: Request): Promise<DataResponseType> {
    let { name, unit_id, uuid, page, per_page, order_column, order_direction }: VendorListFiltersType = req.body

    page = page ? page : 1
    per_page = per_page ? per_page : 10
    order_column = order_column ? order_column : 'created_at'
    order_direction = order_direction ? order_direction : 'ASC'

    let offset: number = 0
    offset = (+page - 1) * per_page;

    let order: any[] = []
    let where: any = {
    }

    where[Op.and] = [
      {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${name}%`
            }
          },
          {
            address: {
              [Op.iLike]: `%${name}%`
            }
          }
        ]
      },
    ]

    if (unit_id) {
      unit_id = (await DB.Units.findOne({ where: { uuid: unit_id } })).id

      where[Op.and].push({
        unit_id: {
          [Op.eq]: unit_id
        }
      })
    }

    order = [[order_column, order_direction]]

    const data: Vendor[] = await DB.Vendors
      .findAll({
        where,
        include: 'unit',
        offset,
        limit: per_page,
        order
      });

    const count: any = await DB.Vendors
      .findAndCountAll({
        where
      });

    const total = Number(count.count);
    const last = Math.ceil(total / per_page);
    const next_page = page < last ? Number(page) + 1 : null

    return {
      data,
      meta: {
        page,
        per_page,
        total,
        next_page,
        last
      }
    };
  }

  public async findAllVendorRaw(req: Request): Promise<DataResponseType> {
    let { name, unit_id, uuid, page, per_page, order_column, order_direction }: VendorListFiltersType = req.body

    page = page ? page : 1
    per_page = per_page ? per_page : 10
    order_column = order_column ? order_column : 'created_at'
    order_direction = order_direction ? order_direction : 'ASC'

    let qBind: string = ''
    let offset: string | number = ''
    let qPaginate: string = ''

    if (page && per_page) {
      offset = (+page - 1) * per_page;
      // qPaginate = `limit ${per_page} offset ${qOffset}`
    }

    // const fetchColumns = async (table: string) => {
    //   const columns = await DB.sq.query(
    //     `SELECT column_name FROM information_schema.columns WHERE table_name = :table`,
    //     {
    //       replacements: { table },
    //       type: QueryTypes.SELECT
    //     }
    //   );
    //   return columns.map((col: { column_name: string }) => col.column_name);
    // };

    // const generateSelectClause = async (tables: string[]) => {
    //   const columns = await Promise.all(tables.map(async (table) => {
    //     const cols = await fetchColumns(table);
    //     return cols.map(col => `${table}.${col} AS "${table}_${col}"`);
    //   }));
    //   return columns.flat().join(', ');
    // };

    // const tables = ['vendors', 'units'];
    // const selectClause = await generateSelectClause(tables);

    // const query = `
    //   SELECT ${selectClause}
    //   FROM vendors
    //   LEFT JOIN units ON vendors.unit_id = units.id
    // `;

    // const results = await DB.sq.query(query, { type: QueryTypes.SELECT });
    // console.log(results, 'results');

    const data: Vendor[] = await DB.sq.query(`
      SELECT * FROM vendors
      limit :per_page offset :offset`, {
      type: QueryTypes.SELECT,
      replacements: { per_page, offset }
    });


    const count: ResultCountType[] = await DB.sq.query(`
      SELECT count(*) as total FROM vendors`, {
      type: QueryTypes.SELECT
    });

    const total = Number(count[0].total);
    const last = Math.ceil(total / per_page);
    const next_page = page < last ? Number(page) + 1 : null

    return {
      data,
      meta: {
        page,
        per_page,
        total,
        next_page,
        last
      }
    };
  }

  public async findVendorById(req: Request): Promise<Vendor> {
    const { uuid } = req.body;

    const findVendor: Vendor = await this.findVendorByUuid(uuid);

    return findVendor;
  }

  public async createVendor(vendorData: CreateVendorDto): Promise<Vendor> {
    const unit = await DB.Units.findOne({ where: { uuid: vendorData.unit_id } });
    delete vendorData.uuid

    const createVendorData: Vendor = await DB.Vendors.create({ ...vendorData, unit_id: unit.id });
    return createVendorData;
  }

  public async updateVendor(req: Request, vendorData: UpdateVendorDto): Promise<Vendor> {
    const { uuid } = req.body;
    const unit = await DB.Units.findOne({ where: { uuid: vendorData.unit_id } });

    const updateFields: UpdateVendorDto = { ...vendorData, unit_id: unit.id };

    await DB.Vendors.update({
      ...updateFields
    }, { where: { uuid } });

    const updateVendor: Vendor = await this.findVendorByUuid(uuid);
    return updateVendor;
  }

  public async deleteVendor(uuid: string, findVendor: Vendor): Promise<Vendor> {
    await DB.Vendors.destroy({ where: { uuid } });

    return findVendor;
  }

  public async findVendorByUuid(uuid: string): Promise<Vendor> {
    try {

      const findVendor: Vendor = await DB.Vendors.findOne({ where: { uuid }, include: 'unit', raw: true });
      return findVendor;
    } catch (error) {

      return null
    }
  }
}
