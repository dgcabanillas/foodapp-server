/* import { UserModel } from "../entity/models/userModel";

import { EditUser, User } from "../entity/types/User";
import logger from "../../shared/logger/appLogger"; */
//import { findAllResources } from "../../shared/factory/findAllResources";
//import { cloudinaryService } from "../../shared/services/uploadImageToCloudService";
import { getOneUserByIdService } from "./getOneUserByIdService";
import { updateOneResourceById } from "../../../shared/factory";
import Logger from "../../../shared/logger/appLogger";
import { UserModel } from "../entity/models/model";
import { EditUser, IUser } from "../entity/types/type";

/* import { getOneUserByIdService } from "./getOneUserByIdService";
import { updateOneResourceById } from "../../shared/factory";
import { bufferFormat } from "../../shared/utils/bufferFormat"; */

export const editOneUserService = async (
  user: EditUser
  //image?: any
): Promise<IUser | null> => {
  try {
    const currentUser: IUser | null = await getOneUserByIdService(user.id);
    if (!currentUser) throw new Error("User Does not exist");

    /*     if (image) {
      const { content } = bufferFormat(image);
      const { public_id, format, url } = await cloudinaryService(content!);
      console.log(url);
      user.avatar = `${public_id}.${format}`;
    } */
    const { id, ...newUserData } = user;
    newUserData.editedAt = new Date();
    const result = await updateOneResourceById(UserModel)(user.id, newUserData);

    return result;
  } catch (error: any) {
    Logger.error("error getting the users", {
      service: "getAllUsersService",
      trace: error.message,
    });
    throw new Error("error updating the users");
  }
};
