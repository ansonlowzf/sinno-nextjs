import {
  Container,
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  SectionWrapper: {
    height: 600,
  },
}));

export const BodyT1 = () => {
  const classes = useStyles();

  return (
    <Grid container item spacing={5} className={classes.SectionWrapper}>
      <Grid container item alignItems="center" xs={12} md={6}>
        <Box px={{ xs: 3, md: 13 }}>
          <Typography component="h2" variant="h3" gutterBottom>
            What We Do?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            possimus aperiam eaque labore nemo vel aliquid assumenda adipisci
            odit ducimus.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            backgroundImage: `url(/factory-entrance.jpg)`,
            height: `100%`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  );
};
