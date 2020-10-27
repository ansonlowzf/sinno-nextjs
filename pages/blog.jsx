import Head from "next/head";
import { Layout, siteTitle } from "../components";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { Date } from "../components";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogList: {
    listStyleType: `none`,
    marginBottom: theme.spacing(1),
  },
}));

export default function Home({ allPostsData }) {
  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxWidth="sm">
        <Typography component="ul">
          {allPostsData.map(({ id, date, title }) => (
            <li className={classes.blogList} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
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
    </Layout>
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
