import { Schema } from 'mongoose';
import { ICoordinate } from './types';

export const CoordinateSchema = new Schema<ICoordinate>({
  lat: {
    type: Number,
    required: [true, 'latitude is required'],
  },
  lng: {
    type: Number,
    required: [true, 'longitude is required'],
  }
});

CoordinateSchema.set('toJSON', { virtuals: true });
CoordinateSchema.set('toObject', { virtuals: true });