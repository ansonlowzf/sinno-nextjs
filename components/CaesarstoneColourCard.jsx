import * as React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const CaesarstoneColourCard = ({ imgSrc, colourName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        component={Image}
        alt={colourName}
        src={imgSrc}
        width={800}
        height={400}
      />

      <Grid
        container
        item
        justify="space-between"
        style={{ marginTop: `0.5em` }}
      >
        <Grid item xs={12} sm={6}>
          <Typography component="p" variant="subtitle2" align="center">
            {colourName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="p" variant="subtitle2" align="center">
            {price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
