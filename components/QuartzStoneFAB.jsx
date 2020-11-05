import * as React from "react";
import { Fab, makeStyles } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(5),
    left: theme.spacing(1),
    zIndex: 999,
    [theme.breakpoints.up("md")]: {
      display: `flex`,
      flexDirection: `column`,
    },
  },
  extendedIcon: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(1),
    },
  },
  linkStyle: {
    textDecoration: `none`,
  },
}));

export const QuartzStoneFAB = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/caesarstone-malaysia">
        <a className={classes.linkStyle}>
          <Fab color="secondary" variant="extended" aria-label="caesarstone">
            Caesarstone
          </Fab>
        </a>
      </Link>
      <Link href="/zenstone-malaysia">
        <a className={classes.linkStyle}>
          <Fab
            color="secondary"
            variant="extended"
            aria-label="zenstone"
            className={classes.extendedIcon}
          >
            Zenstone
          </Fab>
        </a>
      </Link>
    </div>
  );
};
