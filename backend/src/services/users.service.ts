import { Request } from 'express';
import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { PaginationRequestType, ResultCountType } from '@/type/RequestType';
import { QueryTypes } from 'sequelize';
import { Op } from 'sequelize';
import { UserListFiltersType } from '@/type/filters/UserFiltersType';
import { DataResponseType } from '@/type/ResponseType';

@Service()
export class UserService {
  public async findAllUser(req: Request): Promise<DataResponseType> {
    let { first_name, last_name, uuid, page, per_page, order_column, order_direction }: UserListFiltersType = req.body

    let offset: number = 0
    offset = (+page - 1) * per_page;

    let where: any = {}
    let order: any[] = []

    if (uuid) where.uuid = {
      [Op.eq]: uuid
    }

    if (first_name) where.first_name = {
      [Op.like]: first_name
    }

    if (last_name) where.last_name = {
      [Op.like]: last_name
    }

    order_column = order_column ? order_column : 'created_at'
    order_direction = order_direction ? order_direction : 'DESC'
    order = [[order_column, order_direction]]

    const data: User[] = await DB.Users
      .findAll({
        where,
        offset,
        limit: per_page,
        order
      });

    const count: any = await DB.Users
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

  public async findAllUserRaw(req: Request): Promise<DataResponseType> {
    let { page, per_page }: PaginationRequestType = req.body

    let qBind: string = ''
    let offset: string | number = ''
    let qPaginate: string = ''

    if (page && per_page) {
      offset = (+page - 1) * per_page;
      // qPaginate = `limit ${per_page} offset ${qOffset}`
    }

    const data: User[] = await DB.sq.query(`SELECT * FROM users limit :per_page offset :offset`, {
      type: QueryTypes.SELECT,
      replacements: { per_page, offset }
    });

    const count: ResultCountType[] = await DB.sq.query(`SELECT count(*) as total FROM users`, {
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

  public async findUserById(req: Request): Promise<User> {
    const { uuid } = req.body;

    const findUser: User = await this.findUserByUuid(uuid);
    if (!findUser) throw new HttpException(404, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await DB.Users.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateUser(req: Request, userData: UpdateUserDto): Promise<User> {
    const { uuid } = req.body;

    const updateFields: Partial<UpdateUserDto> = { ...userData };

    // If password exists and is not an empty string, hash it and include in the update
    if (userData.password && userData.password.trim()) {
      updateFields.password = await hash(userData.password, 10);
    } else {
      // Remove the password field from updateFields if it's an empty string
      delete updateFields.password;
    }

    await DB.Users.update(updateFields, { where: { uuid } });

    const updateUser: User = await this.findUserByUuid(uuid);
    return updateUser;
  }

  public async deleteUser(uuid: string, findUser: User): Promise<User> {
    await DB.Users.destroy({ where: { uuid } });

    return findUser;
  }

  public async findUserByUuid(uuid: string): Promise<User> {
    try {
      const findUser: User = await DB.Users.findOne({ where: { uuid } });
      return findUser;
    } catch (error) {
      return null
    }
  }
}
