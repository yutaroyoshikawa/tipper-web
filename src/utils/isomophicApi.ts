import { createClient } from "urql";

export const createIsomophicApiClient = (
  authToken?: string
): ReturnType<typeof createClient> =>
  createClient({
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
    fetchOptions: () => ({
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : "",
      },
    }),
  });
