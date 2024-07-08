import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { DB } from '@database';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import type { } from '@interfaces/auth.interface';

const getAuthorization = (req) => {
  const cookie = req.cookies['Authorization'];
  if (cookie) return cookie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  console.log(header, 'cookie header');


  return null;
}

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {

    const Authorization = getAuthorization(req);
    // console.log(Authorization, 'Authorization');

    if (Authorization) {
      const { id } = verify(Authorization, SECRET_KEY) as DataStoredInToken;
      const findUser = await DB.Users.findByPk(id);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        res.status(401).json({ message: 'Wrong authentication token', data: null });
      }
    } else {
      res.status(404).json({ message: 'Authentication token missing', data: null });
    }
  } catch (error) {
    res.status(401).json({ message: 'Wrong authentication token', data: null });
  }
};
