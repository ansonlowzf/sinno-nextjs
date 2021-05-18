import { makeStyles, Grid, Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  itemPadding: {
    paddingTop: 10,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      paddingBottom: 10,
    },
  },
  textAlignCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: `center`,
    },
  },
}));

export const ZenStoneDisplay = ({ imgSrc, stoneName, price }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Image
        src={imgSrc}
        alt={stoneName}
        width={600}
        height={600}
        layout="responsive"
      />

      <Grid container className={classes.itemPadding}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.textAlignCenter}>
            {stoneName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.textAlignCenter}>{price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
