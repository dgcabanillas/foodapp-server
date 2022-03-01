import { Model as ModelType } from 'mongoose';
import { IToken } from '../../auth/entity/schema/authTokenSchema';
import { ICoordinate } from '../../models/Coordinate/types';
import { IFood } from '../../models/Food/types';
import { IMenu } from '../../models/Menu/types';
import { IMenuFood } from '../../models/MenuFood/types';
import { IRestaurant } from '../../models/Restaurant/types';
import { IUser } from '../../models/User/types';
import { IUserRole } from '../../models/UserRole/types';

export const createResource =
  <
    K extends
      | ModelType<IToken>
      | ModelType<ICoordinate>
      | ModelType<IFood>
      | ModelType<IMenu>
      | ModelType<IMenuFood>
      | ModelType<IRestaurant>
      | ModelType<IUser>
      | ModelType<IUserRole>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise<
    IToken 
    | ICoordinate 
    | IFood 
    | IMenu 
    | IMenuFood 
    | IRestaurant 
    | IUser 
    | IUserRole
  > => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
