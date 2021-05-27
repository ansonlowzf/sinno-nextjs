import * as React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const QsBenefit = ({ imgSrc, title, description }) => {
  return (
    <Grid container item spacing={2} alignContent="flex-start" xs={12} md={4}>
      <Grid item>
        <Paper
          component={Image}
          alt={title}
          src={imgSrc}
          width={400}
          height={250}
        />
      </Grid>
      <Grid item>
        <Typography component="h3" variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography align="justify">{description}</Typography>
      </Grid>
    </Grid>
  );
};
