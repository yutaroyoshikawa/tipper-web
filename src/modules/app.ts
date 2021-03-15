import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  authToken?: string;
};

export const appInitialState: AppState = {};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => ({
      ...state,
      authToken: action.payload,
    }),
  },
});
