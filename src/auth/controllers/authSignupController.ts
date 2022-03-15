import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { authCreateTokenService } from '../services/authCreateTokenService';
import { authCreateUserService } from '../services';
import { TCreateUser } from '../types';

export const authSignup = async (
  req: Request<{}, {}, TCreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const newUser = await authCreateUserService(req.body);
    const token = authCreateTokenService(newUser.id);
    res.status(200).json('User created');
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
