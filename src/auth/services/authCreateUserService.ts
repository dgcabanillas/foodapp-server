import { TCreateUser } from '../types';
import { createResource } from '../../shared/factory/createResource';
import { encryptPassword } from '../utils/passwordManager';
import { UserModel } from '../../collections/Users/entity/models/model';
import { IUser } from '../../collections/Users/entity/types/type';

export const authCreateUserService = async (
  userRequest: TCreateUser
): Promise<IUser> => {
  try {
    userRequest['password'] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as IUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
