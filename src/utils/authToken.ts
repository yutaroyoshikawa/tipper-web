import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

export const AUTH_TOKEN_KEY = {
  TOKEN: "token",
  EXPIRATION_TIME: "expirationTime",
} as const;

export const getAuthToken = (
  ctx: GetServerSidePropsContext
): string | undefined => {
  const cookies = nookies.get(ctx);

  if (
    !(AUTH_TOKEN_KEY.TOKEN in cookies) ||
    !(AUTH_TOKEN_KEY.EXPIRATION_TIME in cookies)
  ) {
    return undefined;
  }

  const token = cookies[AUTH_TOKEN_KEY.TOKEN];
  const expirationTime = cookies[AUTH_TOKEN_KEY.EXPIRATION_TIME];

  if (!token || !expirationTime) {
    return undefined;
  }

  const parsedExpirationTime = new Date(expirationTime).valueOf();
  const now = new Date().valueOf();

  if (now > parsedExpirationTime) {
    return undefined;
  }

  return token;
};
