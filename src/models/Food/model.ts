import { model } from 'mongoose';
import { FoodSchema } from './schema';
import { IFood } from './types';

export const FoodModel = model<IFood>('Food', FoodSchema);