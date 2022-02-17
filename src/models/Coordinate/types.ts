import { Types } from 'mongoose';

export interface ICoordinate {
  id: Types.ObjectId
  lat: number
  lng: number
}