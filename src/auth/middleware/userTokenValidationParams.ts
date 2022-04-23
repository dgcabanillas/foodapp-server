import { validateToken } from "../../auth/utils/tokenManager";
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const userTokenValidationParams = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;
    if (!token) return next(new ApplicationError(401, "No token provided"));
    const { id } = validateToken(token);

    if (!id) return next(new ApplicationError(401, "Unvalid Token"));

    req.userId = id;
    next();
  } catch (error: any) {
    if (error.message === "jwt expired")
      return next(new ApplicationError(401, error.message));
    next(error);
  }
};
