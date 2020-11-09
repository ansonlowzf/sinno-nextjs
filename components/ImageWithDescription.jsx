import * as React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const ImageWithDescription = ({ imgSrc, title, description }) => {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={5}>
        <Paper component={Image} src={imgSrc} width={400} height={250} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};
