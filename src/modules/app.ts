import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginUser = {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
  claims: {
    [key: string]: any;
  };
};

type AppState = {
  loginUser?: LoginUser;
};

export const appInitialState: AppState = {
  loginUser: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<LoginUser | undefined>) => ({
      ...state,
      loginUser: action.payload,
    }),
  },
});
