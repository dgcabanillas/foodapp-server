import { Types } from 'mongoose';
import { createRefreshToken } from '../utils/tokenManager';
import { TokenModel } from '../entity/model/authTokenModel';

export const authCreateRefreshToken = async (
  userId: string | Types.ObjectId
): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({ id: userId });
    const token = new TokenModel({
      owner: userId,
      token: refreshToken,
    });
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    throw new Error(`Error creating a new project ${error.message}`);
  }
};
