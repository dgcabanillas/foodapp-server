import { findOneResourceByField } from '../../../shared/factory/findOneResourceByField';
import { UserModel } from '../model';
import { IUser } from '../types';

export const getOneUserByEmail = async (
  email: string
): Promise<IUser | null> => {
  try {
    const user: IUser | null = await findOneResourceByField(UserModel)({
      email,
    });

    return user;
  } catch (error: any) {
    throw new Error(`error getting the user with email${email}`);
  }
};
