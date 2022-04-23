import { IUser } from "../../collections/Users/entity/types/type";

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
  validate: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};