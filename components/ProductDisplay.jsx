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
      <Grid container>
        <Grid item sm={8}>
          <Typography align="center">{stoneName}</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography align="center">{price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
