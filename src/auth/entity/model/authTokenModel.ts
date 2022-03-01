import { model } from 'mongoose';
import { AuthTokenSchema, IToken } from '../schema/authTokenSchema';
export const TokenModel = model<IToken>('Token', AuthTokenSchema);
