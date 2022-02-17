import { Schema } from 'mongoose';
import { IRestaurant } from './types';

export const RestaurantSchema = new Schema<IRestaurant>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user id is required']
  },
  name: {
    type: String,
    required: [true, 'restaurant name is required']
  },
  image: { type: String },
  ruc: { type: String },
  address: {
    type: String,
    required: [true, 'address is required']
  },
  coordinate_id: {
    type: Schema.Types.ObjectId,
    ref: 'Coordinate',
    required: true
  },
  open_hour: {
    type: String,
    required: true
  },
  close_hour: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  }
});

RestaurantSchema.set('toJSON', { virtuals: true });
RestaurantSchema.set('toObject', { virtuals: true });