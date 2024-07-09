import { Request } from 'express';
import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUnitDto, UpdateUnitDto } from '@dtos/units.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Unit } from '@interfaces/units.interface';
import { PaginationRequestType, ResultCountType } from '@/type/RequestType';
import { QueryTypes } from 'sequelize';
import { Op } from 'sequelize';
import { UnitListFiltersType } from '@/type/filters/UnitFiltersType';
import { DataResponseType } from '@/type/ResponseType';

@Service()
export class UnitService {
  public async findAllUnit(req: Request): Promise<DataResponseType> {
    let { name, uuid, page, per_page, order_column, order_direction }: UnitListFiltersType = req.body

    let offset: number = 0
    offset = (+page - 1) * per_page;

    let where: any = {}
    let order: any[] = []

    if (uuid) where.uuid = {
      [Op.eq]: uuid
    }

    if (name) where.name = {
      [Op.iLike]: `%${name}%` // name
    }

    order_column = order_column ? order_column : 'name'
    order_direction = order_direction ? order_direction : 'ASC'
    order = [[order_column, order_direction]]

    const data: Unit[] = await DB.Units
      .findAll({
        include: 'vendors',
        where,
        offset,
        limit: per_page,
        order
      });

    const count: any = await DB.Units
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

  public async findAllUnitRaw(req: Request): Promise<DataResponseType> {
    const { page, per_page }: PaginationRequestType = req.body

    let qBind: string = ''
    let offset: string | number = ''
    let qPaginate: string = ''

    if (page && per_page) {
      offset = (+page - 1) * per_page;
      // qPaginate = `limit ${per_page} offset ${qOffset}`
    }

    const data: Unit[] = await DB.sq.query(`SELECT * FROM units limit :per_page offset :offset`, {
      type: QueryTypes.SELECT,
      replacements: { per_page, offset }
    });

    const count: ResultCountType[] = await DB.sq.query(`SELECT count(*) as total FROM units`, {
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

  public async findUnitById(req: Request): Promise<Unit> {
    const { uuid } = req.body;

    const findUnit: Unit = await this.findUnitByUuid(uuid);

    return findUnit;
  }

  public async createUnit(unitData: CreateUnitDto): Promise<Unit> {
    const createUnitData: Unit = await DB.Units.create({ ...unitData });
    return createUnitData;
  }

  public async updateUnit(req: Request, unitData: UpdateUnitDto): Promise<Unit> {
    const { uuid } = req.body;

    const updateFields: Partial<UpdateUnitDto> = { ...unitData };

    await DB.Units.update(updateFields, { where: { uuid } });

    const updateUnit: Unit = await this.findUnitByUuid(uuid);
    return updateUnit;
  }

  public async deleteUnit(uuid: string, findUnit: Unit): Promise<Unit> {
    await DB.Units.destroy({ where: { uuid } });

    return findUnit;
  }

  public async findUnitByUuid(uuid: string): Promise<Unit> {
    try {
      const findUnit: Unit = await DB.Units.findOne({ where: { uuid } });
      return findUnit;
    } catch (error) {
      return null
    }
  }
}
