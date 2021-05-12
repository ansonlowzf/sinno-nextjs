import { Hero } from "../../components";
import { NextSeo } from "next-seo";
import { SectionWrapper, TextWrapper, Heading2 } from "../../elements";
import { Container, Grid } from "@material-ui/core";
import {
  ProductDisplay,
  ColourWarning,
  PriceTerm,
  SubNavBar,
} from "../../components";
import { graniteRoutes } from "../../constants/route";

const Sensa = () => {
  return (
    <>
      <NextSeo
        title="Sensa | Stone Innovations Enterprise"
        description="Supply &amp; Install Sensa Granite Surfacing for All Kinds Of Countertops Application."
      />
      <Hero
        imgSrc="/sensa/orinoco-1.jpg"
        imgText="Sensa Granite Orinoco"
        title="Sensa Granite"
        subtitle="Supply &amp; Install Sensa Granite Kitchen Top"
      />

      <SubNavBar routes={graniteRoutes} />

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <ProductDisplay
              imgSrc="/sensa/black-beauty-0.jpg"
              stoneName="Black Beauty (Brushed + Polished) 20mm"
              price="RM 580 /FR or RM 300 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/colonial-white-0.jpg"
              stoneName="Colonial White (Polished) 20mm"
              price="RM 565 /FR or RM 290 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/glacial-blue-0.jpg"
              stoneName="Gracial Blue (Polished) 20mm"
              price="RM 685 /FR or RM 352.50 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/ice-blue-0.jpg"
              stoneName="Ice Blue (Polished) 20mm"
              price="RM 680 /FR or RM 350 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/indian-black-0.jpg"
              stoneName="Indian Black (Polished) 20mm"
              price="RM 420 /FR or RM 220 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/moak-black-0.jpg"
              stoneName="Moak Black (Matt) 20mm"
              price="RM 640 /FR or RM 330 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/orinoco-0.jpg"
              stoneName="Orinoco (Polished) 20mm"
              price="RM 860 /FR or RM 440 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/taj-mahal-0.jpeg"
              stoneName="Taj Mahal (Polished) 20mm"
              price="RM 1200 /FR or RM 610 /SF"
            />
            <ProductDisplay
              imgSrc="/sensa/white-macaubas-0.jpg"
              stoneName="White Macaubas (Polished) 20mm"
              price="RM 970 /FR or RM 495 /SF"
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

export default Sensa;
