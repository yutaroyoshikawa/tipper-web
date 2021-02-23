import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

export const getAuthToken = (ctx: GetServerSidePropsContext): string => {
  const cookies = nookies.get(ctx);
  return cookies.token;
};
