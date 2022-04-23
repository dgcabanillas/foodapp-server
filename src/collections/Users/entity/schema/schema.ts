import { Schema } from 'mongoose';
import { IUser } from '../types/type';
import { ProjectModel } from '../../../../projects/entity/models/projectModel';

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'phone number is required']
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: 'UserRole',
    //required: [true, 'role id is required']
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
  validate:{
    type: Boolean,
    default: false,
  }
});

UserSchema.virtual('projects', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'owner',
});

// agregattes
// middlewares
UserSchema.pre('deleteOne', async function (next) {
  const user = this.getFilter();
  await ProjectModel.deleteMany({ owner: user.id });
  next();
});

UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });