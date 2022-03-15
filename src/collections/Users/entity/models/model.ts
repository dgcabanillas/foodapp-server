import { model } from 'mongoose';
import { UserSchema } from '../schema/schema';
import { IUser } from '../types/type';

export const UserModel = model<IUser>('User', UserSchema);