import { model } from 'mongoose';
import { UserRoleSchema } from './schema';
import { IUserRole } from './types';

export const UserRoleModel = model<IUserRole>('UserRole', UserRoleSchema);