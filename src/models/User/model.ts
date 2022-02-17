import { model } from 'mongoose';
import { UserSchema } from './schema';
import { IUser } from './types';

export const TaskModel = model<IUser>('User', UserSchema);