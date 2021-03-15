import {
  ApolloClient,
  HttpLink,
  HttpOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const createApolloClient = (
  link: HttpOptions
): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink(link),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (
  initialState?: NormalizedCacheObject,
  authToken?: string
): ApolloClient<NormalizedCacheObject> => {
  const client = createApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : "",
    },
  });

  if (initialState) {
    const existingCache = client.extract();

    client.cache.restore({ ...existingCache, ...initialState });
  }

  return client;
};
