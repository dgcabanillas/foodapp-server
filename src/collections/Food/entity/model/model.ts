import { model } from 'mongoose';
import { FoodSchema } from '../schema/schema';
import { IFood } from '../types/types';

export const FoodModel = model<IFood>('Food', FoodSchema);