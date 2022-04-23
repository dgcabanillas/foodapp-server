import { Schema, Types } from 'mongoose';
import { IMenu } from './types';

export const MenuSchema = new Schema<IMenu>({
  state: {
    type: Boolean,
    default: false
  },
  menuFoods: [{ type: Types.ObjectId, ref: 'MenuFood' }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },

  //state: boolean
  //foods: IFood[]
});

MenuSchema.set('toJSON', { virtuals: true });
MenuSchema.set('toObject', { virtuals: true });