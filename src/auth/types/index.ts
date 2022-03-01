import { IUser } from "../../models/User/types";

export type TCreateToken = {
  userId: string;
};

export type TTokenResponse = {
  authToken: string;
  refreshToken: string;
};

export type TCreateUser = Omit<IUser, 'id' | 'createdAt' | 'editedAt' | 'coordinate_id'>;

export type TLoginUser = {
  password: string;
  email: string;
};