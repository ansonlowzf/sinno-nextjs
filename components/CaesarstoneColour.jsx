import * as React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { TextWrapper } from "../elements";
import { CaesarstoneColourCard, Back2CaesarstoneButton } from "../components";

const useStyles = makeStyles((theme) => ({
  textMB: {
    marginBottom: theme.spacing(5),
  },
  h1TopSpacing: {
    marginTop: theme.spacing(),
  },
}));

export const CaesarstoneColour = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TextWrapper>
        <Typography
          component="p"
          variant="h6"
          align="center"
          gutterBottom
          className={classes.textMB}
        >
          {`Caesarstone's price for all the 34 Caesarstone colours available in Malaysia.`}
        </Typography>
      </TextWrapper>

      <Grid container spacing={3} justify="center">
        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs1141.jpg"
          colourName="1141 Pure White"
          price="RM 500/FR or RM 260/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs2141.jpg"
          colourName="2141 Snow"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs3100.jpg"
          colourName="3100 Jet Black"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs3101.jpg"
          colourName="3101 Piatto Black"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4001.jpg"
          colourName="4001 Fresh Concrete"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4011.jpg"
          colourName="4011 Cloudburst Concrete"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4023.jpg"
          colourName="4023 Topus Concrete"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4030.jpg"
          colourName="4030 Oyster"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4033.jpg"
          colourName="4033 Rugged Concrete"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4044.jpg"
          colourName="4044 Airy Concrete"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4044.jpg"
          colourName="4044 Airy Concrete"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4120.jpg"
          colourName="4120 Raven"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4130.jpg"
          colourName="4130 Clamshell"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4130.jpg"
          colourName="4130 Clamshell"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4220.jpg"
          colourName="4220 Buttermilk"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4230.jpg"
          colourName="4230 Shitake"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4330.jpg"
          colourName="4330 Ginger"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4350.jpg"
          colourName="4350 Mink"
          price="RM 400/FR or RM 210/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4600.jpg"
          colourName="4600 Organic White"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4601.jpg"
          colourName="4601 Frozen Terra"
          price="RM 410/FR or RM 215/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4735.jpg"
          colourName="4735 Oxidian"
          price="RM 1100/FR or RM 560/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5003.jpg"
          colourName="5003 Piatra Grey"
          price="RM 1100/FR or RM 560/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5031.jpg"
          colourName="5031 Statuario Maximus"
          price="RM 1100/FR or RM 560/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5100.jpg"
          colourName="5100 Vanilla Noir"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5101.jpg"
          colourName="5101 Empira Black"
          price="RM 1100/FR or RM 560/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5131.jpg"
          colourName="5131 Calacatta Nuvo"
          price="RM 1100/FR or RM 560/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5133.jpg"
          colourName="5133 Symphony Grey"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5141.jpg"
          colourName="5141 Frosty Carrina"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5143.jpg"
          colourName="5143 White Attica"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5810.jpg"
          colourName="5810 Black Tempal"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6046.jpg"
          colourName="6046 Moorland Fog"
          price="RM 600/FR or RM 310/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6131.jpg"
          colourName="6131 Bianco Drift"
          price="RM 500/FR or RM 260/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6313.jpg"
          colourName="6313 Turbine Grey"
          price="RM 500/FR or RM 260/SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6338.jpg"
          colourName="6338 Woodlands"
          price="RM 600/FR or RM 310/SF"
        />
      </Grid>
      <Back2CaesarstoneButton navToId="colour" />
    </Container>
  );
};
