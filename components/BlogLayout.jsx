import * as React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { makeStyles, Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    margin: theme.spacing(6, `auto`, 12),
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
export const siteTitle = "Stone Innovations Enterprise Blog";

export function BlogLayout({ children, home }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.containerStyles}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
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
