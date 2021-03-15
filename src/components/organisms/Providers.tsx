import React, { FC } from "react";
import { ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import AuthProvider from "../atoms/authProvider";
import { useApollo } from "../../utils/hooks/apollo";
import { themeColors, GlobalStyle } from "../../utils/globalStyle";

type Props = {
  initialApolloState?: NormalizedCacheObject;
};

const Providers: FC<Props> = ({ children, initialApolloState }) => {
  const apolloClient = useApollo(initialApolloState);

  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={themeColors}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default Providers;
