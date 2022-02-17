import { Schema } from 'mongoose';
import { IMenuFood } from './types';

export const MenuFoodSchema = new Schema<IMenuFood>({
  food_id: {
    type: Schema.Types.ObjectId,
    ref: 'Food',
    required: [true, 'food id is required']
  },
  price: {
    type: Number,
  },
  state: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  }
});

MenuFoodSchema.set('toJSON', { virtuals: true });
MenuFoodSchema.set('toObject', { virtuals: true });