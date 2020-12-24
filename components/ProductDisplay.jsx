import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const ProductDisplay = ({ imgSrc, stoneName, price }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        component={Image}
        src={imgSrc}
        alt={stoneName}
        width={800}
        height={600}
      />
      <Grid container item justify="space-evenly">
        <Typography>{stoneName}</Typography>
        <Typography>{price}</Typography>
      </Grid>
    </Grid>
  );
};
