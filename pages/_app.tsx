import React from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { Provider } from "react-redux";
import { createStore } from "../src/modules/store";
import Providers from "../src/components/organisms/Providers";

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Provider store={createStore()}>
    <Providers initialApolloState={pageProps.initialApolloState}>
      <Component {...pageProps} />
    </Providers>
  </Provider>
);

export default CustomApp;
