import { Types } from 'mongoose';
import { createAuthToken, createRefreshToken } from '../utils/tokenManager';

export const authCreateTokenService = (
  userId: string | Types.ObjectId
): { authToken: string; refreshToken: string } => {
  try {
    return {
      authToken: createAuthToken({ id: userId }),
      refreshToken: createRefreshToken({ id: userId }),
    };
  } catch (error: any) {
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
