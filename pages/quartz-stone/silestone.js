import { Container, Grid } from "@material-ui/core";
import { NextSeo } from "next-seo";
import {
  ColourWarning,
  Hero,
  PriceTerm,
  ProductDisplay,
  SubNavBar,
} from "../../components";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { qsRoutes } from "../../constants/route";

const Silestone = () => {
  return (
    <>
      <NextSeo title="Silestone | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/poblenou_1.jpg"
        imgText="Silestone Poblenou"
        title="Silestone"
        subtitle="Supply &amp; Install Silestone Quartz Surface Kitchen Top"
      />

      <SubNavBar routes={qsRoutes} />

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <ProductDisplay
              imgSrc="/silestone/blanco-city-0.jpg"
              stoneName="Blanco City (Polished / Suede) 20mm"
              price="RM 350 /FR or RM 210 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/gris-expo-0.jpg"
              stoneName="Gris Expo (Polished / Suede) 20mm"
              price="RM 350 /FR or RM 210 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/marengo-0.jpg"
              stoneName="Marengo (Polished / Suede / N-Boost) 20mm"
              price="RM 350 /FR or RM 210 /SF"
            />

            <ProductDisplay
              imgSrc="/silestone/arden-blue-0.jpg"
              stoneName="Arden Blue (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/blanco-maple14-0.jpg"
              stoneName="Blanco Maple 14 (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/blanco-norte14-0.png"
              stoneName="Blanco Norte 14 (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/camden-0.jpg"
              stoneName="Camden (Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/cemento-spa-0.jpg"
              stoneName="Cemento Spa (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/coral-clay-0.jpg"
              stoneName="Coral Clay (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/ironbark-0.jpg"
              stoneName="Ironbark (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/tebas_black18_0.jpg"
              stoneName="Negro Tebas 18 (Polished / Suede / N-boost) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/royal-reef-0.jpg"
              stoneName="Royal Reef (Polished / Suede) 20mm"
              price="RM 390 /FR or RM 230 /SF"
            />

            <ProductDisplay
              imgSrc="/silestone/blanco-rivers-0.jpg"
              stoneName="Blanco Rivers (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/blanco-stellar13-0.jpg"
              stoneName="Blanco Stellar 13 (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/desert-silver-0.jpg"
              stoneName="Desert Silver (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/miami-vena-0.jpg"
              stoneName="Miami Vena (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/negro-stellar-0.jpg"
              stoneName="Negro Stellar (Polished / Suede / N-Boost) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/silken-pearl-0.jpg"
              stoneName="Silken Pearl (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/snowy-ibiza-0.jpg"
              stoneName="Snowy Ibiza (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/tigris-sand-0.jpg"
              stoneName="Tigris Sand (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/white-arabesque-0.jpg"
              stoneName="White Arabesque (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/white-storm14-0.jpg"
              stoneName="White Storm 14 (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/yukon-0.jpg"
              stoneName="Yukon (Polished / Suede) 20mm"
              price="RM 420 /FR or RM 250 /SF"
            />

            <ProductDisplay
              imgSrc="/silestone/blanco-zeus-0.jpg"
              stoneName="Blanco Zeus (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/blanco-orion-0.jpg"
              stoneName="Blanco Orion (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/charcoal_soapstone_0.jpg"
              stoneName="Charcoal Soapstone (Polished / Suede / N-Boost) 20mm "
              price=" RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/corktown-0.jpg"
              stoneName="Corktown (Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_serena_0.jpg"
              stoneName="Eternal Serena (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/iconic_black_0.jpg"
              stoneName="Iconic Black (Polished / Suede / N-Boost) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/kensho-0.jpg"
              stoneName="Kensho (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/lagoon-0.jpg"
              stoneName="Lagoon (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/lyra-0.jpg"
              stoneName="Lyra (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/nolita-0.jpg"
              stoneName="Nolita (Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/pearl-jasmine-0.png"
              stoneName="Pearl Jasmine (Polished / Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/poblenou-0.jpg"
              stoneName="Poblenou (Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/seaport-0.jpg"
              stoneName="Seaport (Suede) 20mm"
              price="RM 550 /FR or RM 320 /SF"
            />

            <ProductDisplay
              imgSrc="/silestone/ariel-0.jpg"
              stoneName="Ariel (Polished / Suede) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/calypso-0.jpg"
              stoneName="Calypso (Polished / Suede) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_bella_0.jpg"
              stoneName="Eternal Bella (Polished / Suede) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_dor_0.jpg"
              stoneName="Eternal D'or (Polished / Suede) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_marquina_0.jpg"
              stoneName="Eternal Marquina (Polished / Suede / N-Boost) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal-statuario-0.jpg"
              stoneName="Eternal Statuario (Polished / Suede) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/iconic_white_0.jpg"
              stoneName="Iconic White (Polished / Suede / N-Boost) 20mm"
              price="RM 590 /FR or RM 350 /SF"
            />

            <ProductDisplay
              imgSrc="/silestone/eternal_noir_0.jpg"
              stoneName="Eternal Noir (Polished / Suede / N-Boost) 20mm"
              price="RM 780 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/eternal_calacatta_gold_0.jpg"
              stoneName="Eternal Calacatta Gold (Polished / Suede) 20mm"
              price="RM 780 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/silestone/polaris_0.jpg"
              stoneName="Polaris (Polished) 20mm"
              price="RM 780 /FR or RM 350 /SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>
    </>
  );
};

export default Silestone;
