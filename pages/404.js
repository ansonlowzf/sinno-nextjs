import * as React from "react";
import Link from "next/link";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  PageContainer: {
    height: `100vh`,
  },
  HeadingMb: {
    marginBottom: theme.spacing(5),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Page Not Found | Stone Innovations Enterprise" />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.PageContainer}
      >
        <Grid item>
          <Typography variant="h1" className={classes.HeadingMb}>
            404 Error - Page Not Found
          </Typography>
          <Typography align="center">
            Please click here to go the{` `}
            <Link href="/">
              <a className="link-style">Home</a>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
