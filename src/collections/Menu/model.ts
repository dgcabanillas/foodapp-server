import { model } from 'mongoose';
import { MenuSchema } from './schema';
import { IMenu } from './types';

export const MenuModel = model<IMenu>('Menu', MenuSchema);