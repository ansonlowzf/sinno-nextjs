import * as React from "react";
import { Paper, makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  heroStyle: {
    position: `relative`,
    width: `100%`,
    height: `80vh`,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginBottom: theme.spacing(13),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  buttonStyles: {
    marginRight: theme.spacing(2),
  },
  textContainer: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(1.75),
  },
  titleStyles: {
    fontWeight: 400,
  },
  subtitleStyles: {
    marginBottom: theme.spacing(5),
  },
  linkStyles: {
    textDecoration: `none`,
  },
}));

export const Hero = ({ imgSrc, imgText, title, subtitle, idPath }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.heroStyle}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={imgSrc} alt={imgText} />}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.overlay}
      >
        <Grid item className={classes.textContainer}>
          <Typography
            variant="h1"
            color="secondary"
            gutterBottom
            className={classes.titleStyles}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            color="inherit"
            gutterBottom
            className={classes.subtitleStyles}
          >
            {subtitle}
          </Typography>
          <a href={`#${idPath}`} className={classes.linkStyles}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.buttonStyles}
            >
              Explore
            </Button>
          </a>
          <Link href="/contact-us">
            <a className={classes.linkStyles}>
              <Button variant="outlined" color="secondary" size="large">
                Contact Us
              </Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};
