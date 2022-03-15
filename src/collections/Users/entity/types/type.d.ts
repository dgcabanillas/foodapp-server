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

export type UserIdType = {
  _id: Types.ObjectId;
};

//export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

/* export type LoginUser = {
  password: string;
  email: string;
};
 */