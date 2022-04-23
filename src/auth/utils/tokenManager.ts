import jwt, { UserIDJwtPayload } from "jsonwebtoken";

export const createAuthToken = (payload: {}, secret?:string): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`, {
    expiresIn: "10m",
  });
};
export const createRefreshToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET}`, {
    expiresIn: "1w",
  });
};

export const validateToken = (token: string, secret?: string) => {
  return jwt.verify(
    token,
    `${process.env.JWT_AUTH_SECRET}${secret}`
  ) as UserIDJwtPayload;
};

export const validateRefreshToken = (token: string) => {
  return <jwt.UserIDJwtPayload>(
    jwt.verify(token, `${process.env.JWT_REFRESH_SECRET}`)
  );
};
