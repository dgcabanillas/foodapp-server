import { Types } from 'mongoose';
import { IMenuFood } from '../MenuFood/types';

export interface IMenu {
  id: Types.ObjectId
  state: boolean
  menuFoods: IMenuFood[]
  createdAt: Date
  updatedAt: Date
}