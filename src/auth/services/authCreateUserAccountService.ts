import { TCreateUser } from "../../auth/types";
import logger from "../../shared/logger/appLogger";
//import { TCreateUser } from "../../collections/Users/entity/types/type";
import { authCreateUserService } from "./authCreateUserService";
import { authSendValidationUserEmail } from "./authSendValidationUserEmail";

export const authCreateUserAccountService = async (
  userRequest: TCreateUser
): Promise<void> => {
  try {
    const newUser = await authCreateUserService(userRequest);
    await authSendValidationUserEmail(newUser.id, newUser.email);
  } catch (error: any) {
    logger.error("Error creating user account", {
      instance: "services",
      fn: "authCreateUserAccountService",
      trace: error.message,
    });
    throw new Error("Error creating user account");
  }
};
