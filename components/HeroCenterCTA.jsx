import * as React from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heroStyle: {
    position: `relative`,
    width: `100%`,
    height: `85vh`,
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
  textContainer: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(1.75),
  },
  titleMB: {
    marginBottom: theme.spacing(5),
  },
  btnStyles: {
    animation: `blink 1s linear infinite`,
  },
  "@keyframes blink": {
    "0%": { opacity: 0 },
    "50%": { opacity: 0.5 },
    "100%": { opacity: 1 },
  },
}));

export const HeroCenterCTA = ({ imgSrc, imgText, title }) => {
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
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.overlay}
      >
        <Typography
          variant="h1"
          color="secondary"
          align="center"
          className={classes.titleMB}
        >
          {title}
        </Typography>
        <Typography component="p" variant="h6" color="secondary">
          Scroll
        </Typography>
        <IconButton
          aria-label="explore"
          color="secondary"
          className={classes.btnStyles}
        >
          <ArrowDownward fontSize="large" />
        </IconButton>
      </Grid>
    </Paper>
  );
};
