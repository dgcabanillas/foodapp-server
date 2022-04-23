import { Schema } from 'mongoose';
import { Project } from '../types/Project';
import { FoodModel } from '../../../collections/Food/entity/model/model';

export const ProjectSchema = new Schema<Project>({
  name: {
    type: String,
    required: [true, 'Project Title is required'],
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Project Price is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project'],
  },
});


ProjectSchema.virtual('foods', {
  ref: 'Foods',
  localField: '_id',
  foreignField: 'project',
});

// agregattes

// middlewares
ProjectSchema.pre('deleteOne', async function (next) {
  const project = this.getFilter();
  await FoodModel.deleteMany({ project: project.id });
  next();
});

ProjectSchema.set('toJSON', { virtuals: true });
ProjectSchema.set('toObject', { virtuals: true });
