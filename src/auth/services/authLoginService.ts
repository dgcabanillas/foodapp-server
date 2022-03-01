
import { TLoginUser } from '../types';
import { createAuthToken } from '../utils/tokenManager';
import { validatePassword } from '../utils/passwordManager';
import { authCreateRefreshToken } from './authCreateRefreshToken';
import { getOneUserByEmail } from '../../models/User/services/getOneUserByEmail';

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
};

export const authLoginService = async (
  userRequest: TLoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error('user email or password is incorrect');

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error('user email or password is incorrect');
    const authToken = createAuthToken({ id: user.id });
    const refreshToken = await authCreateRefreshToken(user.id);

    return {
      authToken,
      refreshToken,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};
