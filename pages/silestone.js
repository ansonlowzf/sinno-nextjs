import { SectionWrapper, TextWrapper, Heading2 } from "../elements";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { ProductDisplay } from "../components";

const useStyles = makeStyles((theme) => ({
  h1MT: {
    marginTop: theme.spacing(10),
  },
}));

const Silestone = () => {
  const classes = useStyles();
  return (
    <>
      <NextSeo title="Silestone Malaysia" />
      <SectionWrapper>
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          className={classes.h1MT}
        >
          Silestone
        </Typography>
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            Supply &amp; Install 20mm Thick Silestone Quartz Surface Kitchen Top
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={3} justify="center">
            <ProductDisplay
              imgSrc="/silestone/blanco_city_0.jpg"
              stoneName="Blanco City (Polished / Suede)"
              price="RM 350 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/gris_expo_0.jpg"
              stoneName="Gris Expo (Polished / Suede)"
              price="RM 350 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/marengo_0.jpg"
              stoneName="Marengo (Polished / Suede / N-Boost)"
              price="RM 350 /FR or RM 210 /SF "
            />

            <ProductDisplay
              imgSrc="/silestone/arden_blue_0.jpg"
              stoneName="Arden Blue (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/blanco_maple14_0.jpg"
              stoneName="Blanco Maple 14 (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/blanco_norte14_0.jpg"
              stoneName="Blanco Norte 14 (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/camden_0.jpg"
              stoneName="Camden (Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/cemento_spa_0.jpg"
              stoneName="Cemento Spa (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/coral_clay_0.jpg"
              stoneName="Coral Clay (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/ironbark_0.jpg"
              stoneName="Ironbark (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/tebas_black18_0.jpg"
              stoneName="Negro Tebas 18 (Polished / Suede / N-boost)"
              price="RM 390 /FR or RM 230 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/royal_reef_0.jpg"
              stoneName="Royal Reef (Polished / Suede)"
              price="RM 390 /FR or RM 230 /SF "
            />

            <ProductDisplay
              imgSrc="/silestone/blanco_rivers_0.jpg"
              stoneName="Blanco Rivers (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/blanco_stellar13_0.jpg"
              stoneName="Blanco Stellar 13 (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/desert_silver_0.jpg"
              stoneName="Desert Silver (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/miami_vena_0.jpg"
              stoneName="Miami Vena (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/negro_stellar_0.jpg"
              stoneName="Negro Stellar (Polished / Suede / N-Boost)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/silken_pearl_0.jpg"
              stoneName="Silken Pearl (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/snowy_ibiza_0.jpg"
              stoneName="Snowy Ibiza (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/tigris_sand_0.jpg"
              stoneName="Tigris Sand (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/white_arabesque_0.jpg"
              stoneName="White Arabesque (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/white_storm14_0.jpg"
              stoneName="White Storm 14 (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/yukon_0.jpg"
              stoneName="Yukon (Polished / Suede)"
              price="RM 420 /FR or RM 250 /SF "
            />

            <ProductDisplay
              imgSrc="/silestone/blanco_zeus_0.jpg"
              stoneName="Blanco Zeus (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/blanco_orion_0.jpg"
              stoneName="Blanco Orion (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/charcoal_soapstone_0.jpg"
              stoneName="Charcoal Soapstone (Polished / Suede / N-Boost)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/corktown_0.jpg"
              stoneName="Corktown (Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_serena_0.jpg"
              stoneName="Eternal Serena (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/iconic_black_0.jpg"
              stoneName="Iconic Black (Polished / Suede / N-Boost)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/kensho_0.jpg"
              stoneName="Kensho (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/lagoon_0.jpg"
              stoneName="Lagoon (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/lyra_0.jpg"
              stoneName="Lyra (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/nolita_0.jpg"
              stoneName="Nolita (Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/pearl_jasmine_0.jpg"
              stoneName="Pearl Jasmine (Polished / Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/poblenou_0.jpg"
              stoneName="Poblenou (Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/seaport_0.jpg"
              stoneName="Seaport (Suede)"
              price="RM 550 /FR or RM 320 /SF "
            />

            <ProductDisplay
              imgSrc="/silestone/ariel_0.jpg"
              stoneName="Ariel (Polished / Suede)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/calypso_0.jpg"
              stoneName="Calypso (Polished / Suede)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_bella_0.jpg"
              stoneName="Eternal Bella (Polished / Suede)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_dor_0.jpg"
              stoneName="Eternal D'or (Polished / Suede)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_marquina_0.jpg"
              stoneName="Eternal Marquina (Polished / Suede / N-Boost)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_statuario_0.jpg"
              stoneName="Eternal Statuario (Polished / Suede)"
              price="RM 590 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/iconic_white_0.jpg"
              stoneName="Iconic White (Polished / Suede / N-Boost)"
              price="RM 590 /FR or RM 350 /SF "
            />

            <ProductDisplay
              imgSrc="/silestone/eternal_noir_0.jpg"
              stoneName="Eternal Noir (Polished / Suede / N-Boost)"
              price="RM 780 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_calacatta_gold_0.jpg"
              stoneName="Eternal Calacatta Gold (Polished / Suede)"
              price="RM 780 /FR or RM 350 /SF "
            />
            <ProductDisplay
              imgSrc="/silestone/polaris_0.jpg"
              stoneName="Polaris (Polished)"
              price="RM 780 /FR or RM 350 /SF "
            />
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Silestone;
