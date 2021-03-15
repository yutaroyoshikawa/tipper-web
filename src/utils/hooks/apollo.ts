import { useMemo } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useSelector } from "react-redux";
import { initializeApollo } from "../initializeApollo";
import { StoreState } from "../../modules/store";

export const useApollo = (
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const authToken = useSelector((store: StoreState) => store.app.authToken);
  const client = useMemo(() => initializeApollo(initialState, authToken), [
    authToken,
    initialState,
  ]);

  return client;
};
