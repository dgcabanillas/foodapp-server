import { model } from 'mongoose';
import { MenuFoodSchema } from './schema';
import { IMenuFood } from './types';

export const MenuFoodModel = model<IMenuFood>('MenuFood', MenuFoodSchema);