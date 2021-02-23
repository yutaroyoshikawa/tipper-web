import { useMemo } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { initializeApollo } from "../initializeApollo";

export const useApollo = (
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
