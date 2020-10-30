import * as React from "react";
import Head from "next/head";
import { Date, BlogLayout, siteTitle } from "../components";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogList: {
    listStyleType: `none`,
    marginBottom: theme.spacing(1),
  },
  linkStyles: {
    textDecoration: `none`,
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export default function Home({ allPostsData }) {
  const classes = useStyles();

  return (
    <BlogLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth="sm">
        <Typography component="ul">
          {allPostsData.map(({ id, date, title }) => (
            <li className={classes.blogList} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={classes.linkStyles}>{title}</a>
              </Link>
              <br />
              <Typography
                component="small"
                variant="body2"
                color="textSecondary"
              >
                <Date dateString={date} />
              </Typography>
            </li>
          ))}
        </Typography>
      </Container>
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
