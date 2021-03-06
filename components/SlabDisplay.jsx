import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const SlabDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        component={Image}
        alt={stoneName}
        src={imgSrc}
        width={800}
        height={600}
      />

      <Grid
        container
        item
        justify="space-between"
        style={{ marginTop: `0.5em` }}
      >
        <Grid item xs={12} sm={6}>
          <Typography component="p" variant="subtitle2" align="center">
            {stoneName}
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
