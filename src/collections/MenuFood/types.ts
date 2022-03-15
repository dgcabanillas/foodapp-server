import { Types } from 'mongoose';

export interface IMenuFood {
  id: Types.ObjectId
  food_id: Types.ObjectId
  price?: number
  state: boolean
  createdAt: Date
  updatedAt: Date
}
