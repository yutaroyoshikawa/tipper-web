import { Store, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { appSlice, appInitialState } from "./app";

const reducers = combineReducers({
  app: appSlice.reducer,
});

const initialState = () => ({
  app: appInitialState,
});

export type StoreState = ReturnType<typeof initialState>;

export type ReduxStore = Store<StoreState>;

export const createStore = (): ReturnType<typeof configureStore> => {
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: reducers,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState(),
  });
};
