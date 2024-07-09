import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';
import { UserModel } from '@/models/users.model';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[POST] /users/list', () => {
    it('response findAll users', async () => {
      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          uuid: '20396a75-6359-4271-bebc-9d211c46b7dda',
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          id: 2,
          uuid: '20396a75-6359-4271-bebc-9d211c46b7ddb',
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          id: 3,
          uuid: '20396a75-6359-4271-bebc-9d211c46b7ddc',
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}/list`).expect(200);
    });
  });

  describe('[POST] /users/show', () => {
    it('response findOne user', async () => {
      const usersRoute = new UserRoute();
      const users = UserModel;
      const userData = {
        uuid: '20396a75-6359-4271-bebc-9d211c46b7dda',
      }

      users.findByPk = jest.fn().mockReturnValue({
        id: 1,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return (await request(app.getServer()).post(`${usersRoute.path}/show`).send(userData).expect(200))
    });
  });

  describe('[POST] /users/create', () => {
    it('response Create user', async () => {
      const userData: CreateUserDto = {
        uuid: '20396a75-6359-4271-bebc-9d211c46b7dde',
        email: 'test@email.com',
        password: 'q1w2e3r4!',
        first_name: 'ari',
        last_name: 'nibros',
      };

      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findOne = jest.fn().mockReturnValue(null);
      users.create = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}/create`).send(userData).expect(201);
    });
  });

  describe('[POST] /users/update', () => {
    it('response Update user', async () => {
      const userId = 1;
      const userData: CreateUserDto = {
        uuid: '20396a75-6359-4271-bebc-9d211c46b7dde',
        email: 'test@email.com',
        password: '1q2w3e4r!',
        first_name: 'ari',
        last_name: 'nibros',
      };

      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findByPk = jest.fn().mockReturnValue({
        id: userId,
        uuid: userData.uuid,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });
      users.update = jest.fn().mockReturnValue([1]);
      users.findByPk = jest.fn().mockReturnValue({
        id: userId,
        uuid: userData.uuid,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}/update`).send(userData).expect(200);
    });
  });

  describe('[POST] /users/delete', () => {
    it('response Delete user', async () => {
      const userData = {
        uuid: '20396a75-6359-4271-bebc-9d211c46b7dda',
      }

      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findByPk = jest.fn().mockReturnValue({
        id: 1,
        uuid: '20396a75-6359-4271-bebc-9d211c46b7dda',
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}/delete`).send(userData).expect(200);
    });
  });
});
