import React, { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themeColors, GlobalStyle } from "../src/utils/globalStyle";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themeColors}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
