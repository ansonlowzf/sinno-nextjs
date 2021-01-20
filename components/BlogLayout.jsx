import * as React from "react";
import Head from "next/head";
import styles from "./blogLayout.module.css";
import Link from "next/link";
import { makeStyles, Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    margin: theme.spacing(13, `auto`, 13),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(8, `auto`, 8),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, `auto`, 6),
    },
  },
  h1Margin: {
    marginBottom: theme.spacing(5),
  },
  linkStyles: {
    textDecoration: `none`,
  },
  buttonStyles: {
    marginTop: theme.spacing(5),
  },
}));

const name = "Blog";
export const siteTitle = "Blog | Stone Innovations Enterprise";

export function BlogLayout({ children, home }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.containerStyles}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Typography
              component="h1"
              variant="h3"
              className={classes.h1Margin}
            >
              {name}
            </Typography>
          </>
        ) : (
          <>
            <Typography component="h2" variant="h4" paragraph>
              <Link href="/blog">
                <a className={classes.linkStyles}>{name}</a>
              </Link>
            </Typography>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <Button variant="outlined" className={classes.buttonStyles}>
          <Link href="/blog">
            <a className={classes.linkStyles}>← Back to blog</a>
          </Link>
        </Button>
      )}
    </Container>
  );
}
