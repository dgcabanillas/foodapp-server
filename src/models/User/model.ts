import { model } from 'mongoose';
import { UserSchema } from './schema';
import { IUser } from './types';

export const UserModel = model<IUser>('User', UserSchema);