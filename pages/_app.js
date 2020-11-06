import * as React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../src/theme";
import { Header, Footer } from "../src/components";
import Head from "next/head";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Stone Innovations Enterprise</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
