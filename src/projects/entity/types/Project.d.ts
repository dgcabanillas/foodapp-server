import { Types } from 'mongoose';
import { Food } from '../../../collections/Food/entity/types/types';
import { UserIdType } from '../../../collections/Users/entity/types/type';

export interface Project {
  id: ProjectId;
  name: string;
  image:string;
  price:number;
  food: Food[];
  createdAt: Date;
  updatedAt: Date;
  owner: UserIdType;
}

export type ProjectId = {
  id: Types.ObjectId;
};

export type CreateProject = {
  name: string;
  image: string;
  price:number;
  owner:string;
};
