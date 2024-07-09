import { Router } from 'express';
import { UserController } from '@controllers/users.controller';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/list`, AuthMiddleware, this.user.getUsers);
    this.router.post(`${this.path}/show`, AuthMiddleware, this.user.getUserById);
    this.router.post(`${this.path}/create`, AuthMiddleware, ValidationMiddleware(CreateUserDto), this.user.createUser);
    this.router.post(`${this.path}/update`, AuthMiddleware, ValidationMiddleware(UpdateUserDto, true), this.user.updateUser);
    this.router.post(`${this.path}/delete`, AuthMiddleware, this.user.deleteUser);
  }
}
