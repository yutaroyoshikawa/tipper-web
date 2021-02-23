import React, { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { themeColors, GlobalStyle } from "../src/utils/globalStyle";
import { useApollo } from "../src/utils/hooks/apollo";
import { useFirebaseAuth } from "../src/utils/hooks/firebase";
import { initializeFirebase } from "../src/utils/initializeFirebase";

if (typeof window !== "undefined") {
  initializeFirebase();
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  useFirebaseAuth();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeColors}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
