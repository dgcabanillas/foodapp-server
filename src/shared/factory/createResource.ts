import { Model as ModelType } from 'mongoose';
import { IToken } from '../../auth/entity/schema/authTokenSchema';
import { ICoordinate } from '../../collections/Coordinate/types';
import { IFood } from '../../collections/Food/entity/types/types';
import { IMenu } from '../../collections/Menu/types';
import { IMenuFood } from '../../collections/MenuFood/types';
import { IRestaurant } from '../../collections/Restaurants/types';
import { IUser } from '../../collections/Users/entity/types/type';
import { IUserRole } from '../../collections/UserRole/types';
import { Project } from '../../projects/entity/types/Project';

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
      | ModelType<Project>
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
    | Project
  > => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
