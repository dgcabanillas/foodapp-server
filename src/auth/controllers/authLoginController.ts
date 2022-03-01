import { NextFunction, Request, Response } from 'express';
import { authLoginService } from '../services';
import { TLoginUser } from '../types';

export const authLogin = async (
  req: Request<{}, {}, TLoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
