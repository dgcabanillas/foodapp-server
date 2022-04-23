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
  validate:boolean
}

export type UserIdType = {
  _id: Types.ObjectId;
};


export type EditUser = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  role_id?: Types.ObjectId;
  editedAt?: Date | null;
  validate?: boolean;
};
export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

/* export type LoginUser = {
  password: string;
  email: string;
};
 */