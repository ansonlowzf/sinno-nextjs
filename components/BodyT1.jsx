import * as React from "react";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Heading2 } from "../elements";

const useStyles = makeStyles((theme) => ({
  SectionWrapper: {
    height: 600,
    marginBottom: theme.spacing(13),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  imageStyles: {
    height: `100%`,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
}));

export const BodyT1 = ({ imgSrc, title }) => {
  const classes = useStyles();

  return (
    <Grid container item spacing={5} className={classes.SectionWrapper}>
      <Grid container item alignItems="center" xs={12} md={6}>
        <Box px={{ xs: 3, md: 13 }}>
          <Heading2>{title}</Heading2>
          <Grid container justify="center">
            <Grid item md={9}>
              <Typography align="center">
                We fabricate, supply &amp; install Quartz Stone, Sintered Stone
                (Porcelain Slab) and Granite for kitchen top, wall cladding or
                flooring application
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={classes.imageStyles}
        />
      </Grid>
    </Grid>
  );
};
