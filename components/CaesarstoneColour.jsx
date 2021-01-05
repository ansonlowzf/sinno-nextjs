import { Container, Grid } from "@material-ui/core";
import { Back2CaesarstoneButton, CaesarstoneColourCard } from "../components";
import { caesarstonePricing } from "../constants";

export const CaesarstoneColour = () => {
  const {
    standard,
    deluxe,
    premium,
    supernatural,
    supernaturalUltra,
    standardJumbo,
    deluxeJumbo,
    supernaturalJumbo,
    supernaturalUltraJumbo,
  } = caesarstonePricing;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justify="center">
        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs1141.jpg"
          colourName="1141 Pure White (Polished)"
          price={premium}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs2141.jpg"
          colourName="2141 Snow (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs3100.jpg"
          colourName="3100 Jet Black (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs3101.jpg"
          colourName="3101 Piatto Black (Natural)"
          price={deluxe}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4001.jpg"
          colourName="4001 Fresh Concrete (Matt)"
          price={deluxe}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4011.jpg"
          colourName="4011 Cloudburst Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4023.jpg"
          colourName="4023 Topus Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4030.jpg"
          colourName="4030 Oyster (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4033.jpg"
          colourName="4033 Rugged Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4044.jpg"
          colourName="4044 Airy Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4120.jpg"
          colourName="4120 Raven (Polished)"
          price={deluxeJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4130.jpg"
          colourName="4130 Clamshell (Polished)"
          price={standardJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4220.jpg"
          colourName="4220 Buttermilk (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4230.jpg"
          colourName="4230 Shitake (Polished)"
          price={deluxe}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4330.jpg"
          colourName="4330 Ginger (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4350.jpg"
          colourName="4350 Mink (Polished)"
          price={standard}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4600.jpg"
          colourName="4600 Organic White (Polished)"
          price={deluxe}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4601.jpg"
          colourName="4601 Frozen Terra (Matt)"
          price={deluxe}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs4735.jpg"
          colourName="4735 Oxidian (Natural)"
          price={supernaturalUltraJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5003.jpg"
          colourName="5003 Piatra Grey (Polished)"
          price={supernaturalUltra}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5031.jpg"
          colourName="5031 Statuario Maximus (Polished)"
          price={supernaturalUltra}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5100.jpg"
          colourName="5100 Vanilla Noir (Polished)"
          price={supernatural}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5101.jpg"
          colourName="5101 Empira Black (Polished/Natural)"
          price={supernaturalUltra}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5131.jpg"
          colourName="5131 Calacatta Nuvo (Polished)"
          price={supernaturalUltra}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5133.jpg"
          colourName="5133 Symphony Grey (Polished)"
          price={supernatural}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5141.jpg"
          colourName="5141 Frosty Carrina (Polished)"
          price={supernatural}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5143.jpg"
          colourName="5143 White Attica (Polished)"
          price={supernatural}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5151.jpg"
          colourName="5151 Empira White (Polished)"
          price={supernaturalUltraJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs5810.jpg"
          colourName="5810 Black Tempal (Natural)"
          price={supernaturalJumbo}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6046.jpg"
          colourName="6046 Moorland Fog (Polished)"
          price={supernatural}
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6131.jpg"
          colourName="6131 Bianco Drift (Polished)"
          price="RM 500 /FR or RM 260 /SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6313.jpg"
          colourName="6313 Turbine Grey (Polished)"
          price="RM 500 /FR or RM 260 /SF"
        />

        <CaesarstoneColourCard
          imgSrc="/classico-colour/cs6338.jpg"
          colourName="6338 Woodlands (Polished)"
          price={supernatural}
        />
      </Grid>

      <Back2CaesarstoneButton navToId="colour" />
    </Container>
  );
};
