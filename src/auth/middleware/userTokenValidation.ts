import { NextFunction, Response, Request } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { validateToken } from '../../auth/utils/tokenManager';

export const userTokenValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return next(new ApplicationError(401, 'No token provided'));

    const { id } = validateToken(authorization);

    if (!id) return next(new ApplicationError(401, 'Unvalid token'));

    req.userId = id;

    next();
  } catch (error: any) {
    if (error.message === 'jwt expired')
      return next(new ApplicationError(401, error.message));
    next(error);
  }
};
