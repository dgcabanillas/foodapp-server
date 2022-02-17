import { model } from 'mongoose';
import { CoordinateSchema } from './schema';
import { ICoordinate } from './types';

export const CoordinateModel = model<ICoordinate>('Coordinate', CoordinateSchema);