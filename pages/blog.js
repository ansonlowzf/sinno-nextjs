import { Container, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as React from "react";
import { BlogLayout, Date, siteTitle } from "../components";
import { getSortedPostsData } from "../lib/posts";

const useStyles = makeStyles((theme) => ({
  blogList: {
    listStyle: `none`,
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
      <NextSeo title={siteTitle} />
      <Container maxWidth="sm">
        <Typography>
          {allPostsData.map(({ id, date, title }) => (
            <Typography
              component="li"
              variant="h6"
              key={id}
              gutterBottom
              className={classes.blogList}
            >
              <Link href={`/blog/${id}`}>
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
            </Typography>
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
