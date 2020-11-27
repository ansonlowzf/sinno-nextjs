import { Button, Grid, makeStyles } from "@material-ui/core";
import Link from "next/link";
import * as React from "react";

export const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },
  buttonStyle: {
    backgroundImage: `linear-gradient(45deg, #3854f2, #6f04d9)`,
    color: "white",
    fontWeight: `bold`,
    padding: theme.spacing(2, 3),
    letterSpacing: theme.spacing(0.5),
  },
}));

export const SinnoButton = ({ linkUrl, btnText }) => {
  const classes = useStyles();

  return (
    <Grid container item justify="center">
      <Link href={linkUrl}>
        <a className={classes.linkStyle}>
          <Button
            variant="contained"
            aria-label={btnText}
            className={classes.buttonStyle}
          >
            {btnText}
          </Button>
        </a>
      </Link>
    </Grid>
  );
};
