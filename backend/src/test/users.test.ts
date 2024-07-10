import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { UserRoute } from '@routes/users.route';
import { UserModel } from '@/models/users.model';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config'; // Adjust the path accordingly
import { CreateUserDto } from '@/dtos/users.dto';
import { randomUUID } from 'crypto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  let token: string;

  beforeAll(() => {
    const payload = { id: 1 }; // Mock user ID
    token = sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Generate JWT token
  });

  describe('[POST] /users/list', () => {
    it('response findAll users has result with 3 users', async () => {
      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          id: 2,
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          id: 3,
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      const app = new App([usersRoute]);
      return await request(app.getServer())
        .post(`${usersRoute.path}/list`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          page: 1,
          per_page: 10,
          order_column: '',
          order_direction: '',
        })
        .expect(200);
    });
  });

  describe('[POST] /users/show', () => {
    it('response findOne user', async () => {
      const usersRoute = new UserRoute();
      const users = UserModel;
      const userData = {
        uuid: randomUUID(),
      }

      users.findByPk = jest.fn().mockReturnValue({
        id: 1,
        uuid: userData.uuid,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return await request(app.getServer())
        .post(`${usersRoute.path}/show`)
        .set('Authorization', `Bearer ${token}`)
        .send(userData)
        .expect(200)
    });
  });

  describe('[POST] /users/create', () => {
    it('response Create user', async () => {
      const userData: CreateUserDto = {
        uuid: randomUUID(),
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
        password: await bcrypt.hash(userData.password, 9),
        uuid: userData.uuid,
        first_name: userData.first_name,
        last_name: userData.last_name,
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer())
        .post(`${usersRoute.path}/create`)
        .set('Authorization', `Bearer ${token}`)
        .send(userData)
        .expect(200);
    });
  });

  describe('[POST] /users/update', () => {
    it('response Update user', async () => {
      const userData: CreateUserDto = {
        uuid: randomUUID(),
        email: 'test@email.com',
        password: '1q2w3e4r!',
        first_name: 'ari',
        last_name: 'nibros',
      };

      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findOne = jest.fn().mockReturnValue({
        uuid: userData.uuid,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });
      users.update = jest.fn().mockReturnValue([1]);
      users.findOne = jest.fn().mockReturnValue({
        uuid: userData.uuid,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer())
        .post(`${usersRoute.path}/update`)
        .set('Authorization', `Bearer ${token}`)
        .send(userData)
        .expect(200);
    });
  });

  describe('[POST] /users/delete', () => {
    it('response Delete user', async () => {
      const userData = {
        uuid: randomUUID(),
      }

      const usersRoute = new UserRoute();
      const users = UserModel;

      users.findOne = jest.fn().mockReturnValue({
        uuid: userData.uuid,
      });

      const app = new App([usersRoute]);
      return request(app.getServer())
        .post(`${usersRoute.path}/delete`)
        .set('Authorization', `Bearer ${token}`)
        .send(userData)
        .expect(200);
    });
  });
});
