import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { authCreateTokenService } from "../services/authCreateTokenService";
import {
  authCreateUserService,
  authSendValidationUserEmail,
} from "../services";
import { TCreateUser } from "../types";
import { authCreateUserAccountService } from "../../auth/services/authCreateUserAccountService";

export const authSignup = async (
  req: Request<{}, {}, TCreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await authCreateUserAccountService(req.body);
    //const token = authCreateTokenService(newUser.id);
    res.status(200).json({ success: true });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
