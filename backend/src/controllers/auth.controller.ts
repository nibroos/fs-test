import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import { AuthService } from '@services/auth.service';
import { cloneObject, flattenObject } from '@/utils/objectFormat';

export class AuthController {
  public auth = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { user, cookie, tokenData } = await this.auth.signup(userData);

      res.setHeader('Set-Cookie', [cookie]);
      let userflatten = cloneObject(user);

      res.status(201).json({ data: { ...userflatten, ...tokenData }, message: 'signup', cookie, tokenData });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser, tokenData } = await this.auth.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      let userflatten = cloneObject(findUser);

      res.status(200).json({ data: { ...userflatten, ...tokenData }, message: 'login', cookie: cookie });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.auth.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };

  public getProfile = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const token = flattenObject((await this.auth.getProfile(userData)).token);
      let userflatten = cloneObject(userData);

      delete userflatten.password;

      res.status(200).json({ data: { ...userflatten, ...token }, message: 'profile' });
    } catch (error) {
      next(error);
    }
  };
}
