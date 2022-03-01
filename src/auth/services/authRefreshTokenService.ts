import { createAuthToken } from '../utils/tokenManager';
import {
  findOneResourceByField,
  findOneResourceById,
} from '../../shared/factory';
import { TokenModel } from '../entity/model/authTokenModel';
import { UserModel } from '../../models/User/model';

export const authRefreshTokenService = async (
  userId: string,
  refreshToken: string
): Promise<{ authToken: string }> => {
  //TODO: refactor errors and add logger

  const user = await findOneResourceById(UserModel)(userId);

  if (!user) throw new Error('invalid user id');

  const currentToken = await findOneResourceByField(TokenModel)({
    token: refreshToken,
  });
  if (!currentToken) throw new Error('invalid token');

  try {
    return {
      authToken: createAuthToken({ id: userId }),
    };
  } catch (error: any) {
    throw new Error(error);
  }
};
