import { Container, Grid } from "@material-ui/core";
import { Back2CaesarstoneButton, ProductDisplay } from "../components";
import { caesarstonePricing } from "../constants";

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

export const CaesarstoneColour = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justify="center">
        <ProductDisplay
          imgSrc="/classico-colour/cs1141.jpg"
          stoneName="1141 Pure White (Polished)"
          price={premium}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs2141.jpg"
          stoneName="2141 Snow (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs3100.jpg"
          stoneName="3100 Jet Black (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs3101.jpg"
          stoneName="3101 Piatto Black (Natural)"
          price={deluxe}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4001.jpg"
          stoneName="4001 Fresh Concrete (Matt)"
          price={deluxe}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4011.jpg"
          stoneName="4011 Cloudburst Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4023.jpg"
          stoneName="4023 Topus Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4030.jpg"
          stoneName="4030 Oyster (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4033.jpg"
          stoneName="4033 Rugged Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4044.jpg"
          stoneName="4044 Airy Concrete (Rough)"
          price={supernaturalJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4120.jpg"
          stoneName="4120 Raven (Polished)"
          price={deluxeJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4130.jpg"
          stoneName="4130 Clamshell (Polished)"
          price={standardJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4220.jpg"
          stoneName="4220 Buttermilk (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4230.jpg"
          stoneName="4230 Shitake (Polished)"
          price={deluxe}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4330.jpg"
          stoneName="4330 Ginger (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4350.jpg"
          stoneName="4350 Mink (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4600.jpg"
          stoneName="4600 Organic White (Polished)"
          price={deluxe}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4601.jpg"
          stoneName="4601 Frozen Terra (Matt)"
          price={deluxe}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs4735.jpg"
          stoneName="4735 Oxidian (Natural)"
          price={supernaturalUltraJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5003.jpg"
          stoneName="5003 Piatra Grey (Polished)"
          price={supernaturalUltra}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5031.jpg"
          stoneName="5031 Statuario Maximus (Polished)"
          price={supernaturalUltra}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5100.jpg"
          stoneName="5100 Vanilla Noir (Polished)"
          price={supernatural}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5101.jpg"
          stoneName="5101 Empira Black (Polished/Natural)"
          price={supernaturalUltra}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5131.jpg"
          stoneName="5131 Calacatta Nuvo (Polished)"
          price={supernaturalUltra}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5133.jpg"
          stoneName="5133 Symphony Grey (Polished)"
          price={supernatural}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5141.jpg"
          stoneName="5141 Frosty Carrina (Polished)"
          price={supernatural}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5143.jpg"
          stoneName="5143 White Attica (Polished)"
          price={supernatural}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5151.jpg"
          stoneName="5151 Empira White (Polished)"
          price={supernaturalUltraJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs5810.jpg"
          stoneName="5810 Black Tempal (Natural)"
          price={supernaturalJumbo}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs6046.jpg"
          stoneName="6046 Moorland Fog (Polished)"
          price={supernatural}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs6011.jpg"
          stoneName="6011 Intense White (Polished)"
          price={standard}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs6131.jpg"
          stoneName="6131 Bianco Drift (Polished)"
          price={premium}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs6313.jpg"
          stoneName="6313 Turbine Grey (Polished)"
          price={premium}
        />

        <ProductDisplay
          imgSrc="/classico-colour/cs6338.jpg"
          stoneName="6338 Woodlands (Polished)"
          price={supernatural}
        />
      </Grid>

      <Back2CaesarstoneButton navToId="colour" />
    </Container>
  );
};
