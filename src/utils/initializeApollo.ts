import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT ?? "",
    }),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const apolloClientTmp = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = apolloClientTmp.extract();
    apolloClientTmp.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") {
    apolloClient = apolloClientTmp;
  }

  return apolloClientTmp;
};
