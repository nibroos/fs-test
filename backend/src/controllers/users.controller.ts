import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { DB } from '@/database';
import { DataResponseType } from '@/type/ResponseType';
import { HttpException } from '@/exceptions/HttpException';

export class UserController {
  public user = Container.get(UserService);

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: DataResponseType = await this.user.findAllUser(req);
      // const findAllUsersData: DataResponseType = await this.user.findAllUserRaw(req);

      res.status(200).json({ data: findAllUsersData.data, message: 'findAll', meta: findAllUsersData.meta });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOneUserData: User = await this.user.findUserById(req);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const userData: CreateUserDto = req.body;
      const createUserData: User = await this.user.createUser(userData);

      await t.commit();

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const userData: UpdateUserDto = req.body;

      const findUser: User = await this.user.findUserByUuid(userData.uuid);
      if (!findUser) res.status(404).json({ data: null, message: "User doesn't exist" });

      const updateUserData: User = await this.user.updateUser(req, userData);

      await t.commit()

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();
    try {
      const findUser: User = await this.user.findUserByUuid(req.body.uuid);
      if (!findUser) res.status(404).json({ data: null, message: "User doesn't exist" });

      const deleteUserData: User = await this.user.deleteUser(req.body.uuid, findUser);

      await t.commit()

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };
}
