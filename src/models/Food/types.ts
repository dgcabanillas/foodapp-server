import { Types } from 'mongoose';

export interface IFood {
  id: Types.ObjectId
  name: string
  image: string
  price: number
  createdAt: Date
  updatedAt: Date
}