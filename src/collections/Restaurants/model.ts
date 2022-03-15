import { model } from 'mongoose';
import { RestaurantSchema } from './schema';
import { IRestaurant } from './types';

export const RestaurantModel = model<IRestaurant>('Restaurant', RestaurantSchema);