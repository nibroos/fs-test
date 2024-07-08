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

@Service()
export class VendorService {
  public async findAllVendor(req: Request): Promise<DataResponseType> {
    let { name, unit_id, uuid, page, per_page, order_column, order_direction }: VendorListFiltersType = req.body

    let offset: number = 0
    offset = (+page - 1) * per_page;

    let where: any = {}
    let order: any[] = []

    if (uuid) where.uuid = {
      [Op.eq]: uuid
    }

    if (name) where.name = {
      [Op.substring]: name
    }

    order_column = order_column ? order_column : 'created_at'
    order_direction = order_direction ? order_direction : 'DESC'
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

    return {
      data,
      meta: {
        page,
        per_page,
        total,
        last
      }
    };
  }

  public async findAllVendorRaw(req: Request): Promise<DataResponseType> {
    const { page, per_page }: PaginationRequestType = req.body

    let qBind: string = ''
    let offset: string | number = ''
    let qPaginate: string = ''

    if (page && per_page) {
      offset = (+page - 1) * per_page;
      // qPaginate = `limit ${per_page} offset ${qOffset}`
    }

    const data: Vendor[] = await DB.sq.query(`SELECT * FROM vendors limit :per_page offset :offset`, {
      type: QueryTypes.SELECT,
      replacements: { per_page, offset }
    });

    const count: ResultCountType[] = await DB.sq.query(`SELECT count(*) as total FROM vendors`, {
      type: QueryTypes.SELECT
    });

    const total = Number(count[0].total);
    const last = Math.ceil(total / per_page);

    return {
      data,
      meta: {
        page,
        per_page,
        total,
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

    const createVendorData: Vendor = await DB.Vendors.create({ ...vendorData, unit_id: unit.id });
    return createVendorData;
  }

  public async updateVendor(req: Request, vendorData: UpdateVendorDto): Promise<Vendor> {
    const { uuid } = req.body;
    const unit = await DB.Units.findOne({ where: { uuid: vendorData.unit_id } });
    console.log(uuid, 'cek uuid update');

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

      console.log(uuid, 'cek uuid2');

      const findVendor: Vendor = await DB.Vendors.findOne({ where: { uuid }, include: 'unit' });
      return findVendor;
    } catch (error) {
      console.log(error, 'error apa');

      return null
    }
  }
}
