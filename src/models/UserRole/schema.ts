import { Schema } from 'mongoose';
import { IUserRole } from './types';

export const UserRoleSchema = new Schema<IUserRole>({
  role: {
    type: String,
  },
  description: {
    type: String,
    required: [true, ' email is required'],
    unique: true,
  }
});

UserRoleSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'role_id',
});

UserRoleSchema.set('toJSON', { virtuals: true });
UserRoleSchema.set('toObject', { virtuals: true });