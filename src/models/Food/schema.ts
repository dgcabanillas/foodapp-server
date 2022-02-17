import { Schema } from 'mongoose';
import { IFood } from './types';

export const FoodSchema = new Schema<IFood>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  image: {
    type: String,
    required: [true, 'image is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
});

FoodSchema.set('toJSON', { virtuals: true });
FoodSchema.set('toObject', { virtuals: true });