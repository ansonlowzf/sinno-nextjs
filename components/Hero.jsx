import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import * as React from "react";

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

  titleStyles: {
    fontWeight: 400,
  },
  subtitleStyles: {
    color: theme.palette.common.white,
  },

  heroBgContainer: {
    position: `relative`,
    height: `90vh`,
    width: `100vw`,
    overflow: `hidden`,
    zIndex: -1,
  },
}));

export const Hero = ({ imgSrc, imgText, title, subtitle, idPath }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroBgContainer}>
      <Image
        src={imgSrc}
        alt={imgText}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        className={classes.overlay}
      >
        <Grid item className={classes.textContainer}>
          <Typography
            variant="h1"
            color="secondary"
            align="center"
            gutterBottom
            className={classes.titleStyles}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            color="inherit"
            align="center"
            gutterBottom
            className={classes.subtitleStyles}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
