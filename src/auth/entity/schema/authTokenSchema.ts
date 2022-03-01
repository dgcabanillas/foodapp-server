import { Schema, Types } from 'mongoose';

export interface IToken {
  token: string;
  createdAt: Date;
  expireAt: Date;
  owner: Types.ObjectId;
}

export const AuthTokenSchema = new Schema<IToken>({
  token: {
    type: String,
    required: [true, 'a token is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  expireAt: {
    type: Date,
    default: new Date(),
    index: { expires: 60 * 60 * 24 },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a token'],
  },
});