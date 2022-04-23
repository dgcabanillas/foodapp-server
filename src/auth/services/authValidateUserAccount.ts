import { editOneUserService } from "../../collections/Users/services/editOneUserService";
import { getOneUserByIdService } from "../../collections/Users/services/getOneUserByIdService";
import logger from "../../shared/logger/appLogger";


export const authValidateUserAccount = async (
  userId: string
): Promise<Boolean> => {
  try {
    const user = await getOneUserByIdService(userId);
    if (!user) throw new Error("user incorrect");
    const userValid = await editOneUserService({ id: userId, validate: true });
    return userValid?.validate || false;
  } catch (error: any) {
    logger.error("Error validating user email", {
      instance: "services",
      fn: "authValidateUserAccount",
      trace: error.message,
    });
    throw new Error("Error validating user email");
  }
};
