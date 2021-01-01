import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import {
  ColourWarning,
  Hero,
  PriceTerm,
  ProductDisplay,
  QuotationCTA,
  SubNavBar,
} from "../../components";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { graniteRoutes } from "../../constants/route";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },
}));

const graniteMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Granite | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/blue_pearl.jpg"
        imgText="Granite Blue Pearl"
        title="Granite"
        subtitle="Supply &amp; Install Granite Kitchen Top"
      />

      <SubNavBar routes={graniteRoutes} />

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
          <Typography align="center">Thickness: 17mm - 18mm</Typography>
        </TextWrapper>
      </SectionWrapper>

      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          className={classes.sectionMargin}
          justify="center"
        >
          <ProductDisplay
            imgSrc="/granite/black-galaxy.JPEG"
            stoneName="Black Galaxy"
            price="RM 220 /FR or RM 120 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/blue-pearl.JPG"
            stoneName="Blue Pearl"
            price="RM 250 /FR or RM 135 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/bourbon-grey.JPG"
            stoneName="Bourbon Grey"
            price="RM 220 /FR or RM 120 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/emerald-pearl.JPG"
            stoneName="Emerald Pearl"
            price="RM 250 /FR or RM 135 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/imperial-red.JPG"
            stoneName="Imperial Red"
            price="RM 340 /FR or RM 180 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/white-wave.JPG"
            stoneName="White Wave"
            price="RM 310 /FR or RM 165 /SF"
          />
          <ProductDisplay
            imgSrc="/granite/xan-xi-black.JPEG"
            stoneName="Shan Xi Black"
            price="RM 310 /FR or RM 165 /SF"
          />
        </Grid>
      </Container>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <QuotationCTA stone="Granite" />
    </>
  );
};

export default graniteMalaysia;
