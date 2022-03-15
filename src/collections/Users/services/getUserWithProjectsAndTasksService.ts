import logger from '../../../shared/logger/appLogger';
import { UserModel } from '../../../collections/Users/entity/models/model';

import { IUser, UserIdType } from '../../../collections/Users/entity/types/type';
import { findOneResourceById } from '../../../shared/factory/findOneResourceById';
import { ProjectModel } from '../../../projects/entity/models/projectModel';
import { FoodModel } from '../../Food/entity/model/model';

export const getUserWithProjectsAndTasksService = async (
  id: string
): Promise<IUser | null> => {
  /*
 {
        path: "path1",
        select: "field",
        model: Model1
      },
      {
        path: "path2",
        select: "field2",
        model: Model2
      }
      
      */
  const options = [
    {
      path: 'projects',
      model: ProjectModel,
      populate: {
        path: 'foods',
        model: FoodModel,
      },
    },
  ];

  try {
    const user: IUser[] = await findOneResourceById(UserModel)(id, options);
    return user[0];
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
