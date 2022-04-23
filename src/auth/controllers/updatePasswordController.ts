import { getOneUserByIdService } from "../../collections/Users/services/getOneUserByIdService";
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
/* import { getOneUserByIdService } from "../../users/services";

import { editOneUserService } from "../../users/services/editOneUserService"; */

import { encryptPassword } from "../utils/passwordManager";
import { validateTestAuthToken } from "../../shared/testUtils/testTokenManager";
import { editOneUserService } from "../../collections/Users/services/editOneUserService";
import { validateToken } from "../../auth/utils/tokenManager";
//import { validateAuthToken } from "../utils/tokenManager";

export const updatePasswordController = async (
  req: Request<{ id: string; token: string }, {}, { password: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    //qconsole.log(id)
    const user = await getOneUserByIdService(id);
    //console.log(user)
    if (!user) throw new Error("user does not exist ");
    //validate token
    //console.log(user.password)
    const { id: userId } = validateToken(token, user.password);
    
    //console.log(`IDDDDDDDDDDqD ${id}`)

    const newPassword = await encryptPassword(password);

    const userValid = await editOneUserService({
      id: userId,
      password: newPassword,
    });

    res.status(200).json({ message: userValid });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
