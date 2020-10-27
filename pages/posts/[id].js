import { BlogLayout, Date } from "../../components";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { Typography } from "@material-ui/core";

export default function Post({ postData }) {
  return (
    <BlogLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Typography component="h1" variant="h6" gutterBottom>
          {postData.title}
        </Typography>
        <Typography component="small" variant="body2" color="textSecondary">
          <Date dateString={postData.date} />
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
