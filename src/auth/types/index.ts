import { IUser } from "../../models/User/types";

export type TCreateToken = {
  userId: string;
};

export type TTokenResponse = {
  authToken: string;
  refreshToken: string;
};

export type TCreateUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export type TLoginUser = {
  email: string;
  password: string;
};