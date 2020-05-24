import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../lib/globalstyle";
import Page from "../components/Main/Page";

const theme = {
  light: {},
  dark: {},
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default MyApp;
