import { Types } from "mongoose";

export interface IUserRole {
  id: Types.ObjectId
  role: string
  description: string
}