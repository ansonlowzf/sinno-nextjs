import { Container, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as React from "react";
import { BlogLayout, Date, siteTitle } from "../components";
import { getSortedPostsData } from "../lib/posts";

const useStyles = makeStyles((theme) => ({
  blogList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  blogListItem: {
    listStyle: `none`,
  },
  linkStyles: {
    textDecoration: `none`,
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const classes = useStyles();

  return (
    <BlogLayout home>
      <NextSeo title={siteTitle} />

      <Container maxWidth="sm">
        <ul className={classes.blogList}>
          <Typography>
            {allPostsData.map(({ id, date, title }) => (
              <Typography
                component="li"
                variant="h6"
                key={id}
                gutterBottom
                className={classes.blogListItem}
              >
                <Link href={`/blog/${id}`}>
                  <a className={classes.linkStyles}>{title}</a>
                </Link>
                <br />
                {id}
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
        </ul>
      </Container>
    </BlogLayout>
  );
}
