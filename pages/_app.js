import * as React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../styles/theme";
import { Header, Footer } from "../components";
import Head from "next/head";
import "../styles/global.css";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
