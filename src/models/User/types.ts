import { Types } from 'mongoose';

export interface IUser {
  id: Types.ObjectId
  name: string
  email: string
  password: string
  phoneNumber: string
  role_id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}