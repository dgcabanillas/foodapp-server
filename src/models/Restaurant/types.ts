import { Types } from 'mongoose';

export interface IRestaurant {
  id: Types.ObjectId
  user_id: Types.ObjectId
  name: string
  image?: string
  ruc?: string
  address: string
  coordinate_id: Types.ObjectId
  open_hour: string
  close_hour: string
  state: boolean
  createdAt: Date
  updatedAt: Date
}