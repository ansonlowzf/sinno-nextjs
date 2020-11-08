import * as React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  bodyStyles: {
    margin: theme.spacing(6, 0),
  },
}));

export const BodyT1 = ({ imgSrc, title }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          className={classes.bodyStyles}
        >
          <Typography
            component="h2"
            variant="h3"
            color="primary"
            align="center"
            gutterBottom
            style={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Grid container justify="center">
            <Grid item md={8}>
              <Typography align="center">
                We fabricate, supply &amp; install Quartz Stone, Sintered Stone
                (Porcelain Slab) and Granite for kitchen top, wall cladding or
                flooring application
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper component={Image} src={imgSrc} width={800} height={500} />
        </Grid>
      </Grid>
    </Container>
  );
};
