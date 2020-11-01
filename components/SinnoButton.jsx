import * as React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  linkStyle: {
    textDecoration: "none",
  },
  buttonStyle: {
    backgroundImage: `linear-gradient(45deg, #3854f2, #6f04d9)`,
    color: "white",
    fontWeight: `bold`,
  },
});

export const SinnoButton = ({ linkUrl, buttonText }) => {
  const classes = useStyles();

  return (
    <Box py={5}>
      <Grid container item justify="center">
        <Link href={linkUrl}>
          <a className={classes.linkStyle}>
            <Button
              variant="contained"
              aria-label={buttonText}
              className={classes.buttonStyle}
            >
              <Box px={2} py={1} letterSpacing={2}>
                {buttonText}
              </Box>
            </Button>
          </a>
        </Link>
      </Grid>
    </Box>
  );
};
