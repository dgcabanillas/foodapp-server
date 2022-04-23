import logger from '../../../shared/logger/appLogger';
import { UserModel } from '../entity/models/model';
import { IUser, UserIdType } from '../entity/types/type';
import { findOneResourceById } from '../../../shared/factory/findOneResourceById';

export const getOneUserByIdService = async (
  id: string
): Promise<IUser | null> => {
  try {
    const user: IUser[] = await findOneResourceById(UserModel)(id);
    return user[0];
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
