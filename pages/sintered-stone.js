import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { ProductDisplay, QuotationCTA } from "../components";
import { Heading2, SectionWrapper, TextWrapper } from "../elements";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },

  h1MT: {
    marginTop: theme.spacing(10),
  },
}));

const graniteMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Sintered Stone" />
      {/* <HeroScrollDown
        imgSrc="/blue_pearl.jpg"
        imgText="Sintered Stone"
        title="Sintered Stone"
        subtitle="Supply &amp; Install Sintered Stone Kitchen Top"
      /> */}

      <SectionWrapper>
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          className={classes.h1MT}
        >
          Sintered Stone
        </Typography>
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            Supply &amp; Install Sintered Stone (AKA Porcelain Slab or Porcelain
            Surface) Kitchen Top
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
          <Grid
            container
            spacing={3}
            className={classes.sectionMargin}
            justify="center"
          >
            <ProductDisplay
              imgSrc="/sintered-stone/ps6.jpg"
              stoneName="QP 2013 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/ps4.jpg"
              stoneName="QP 2031 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/ps5.jpg"
              stoneName="QP 2032 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/ps1.jpg"
              stoneName="QP 2033B (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/ps2.jpg"
              stoneName="QP 2034 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/ps3.jpg"
              stoneName="QP 2035 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />

            <ProductDisplay
              imgSrc="/sintered-stone/qp2036a.jpg"
              stoneName="QP 2036A (12mm) Smooth Matt"
              price="RM 300 per FR / RM 150 per SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Sintered Stone" />
      </SectionWrapper>
    </>
  );
};

export default graniteMalaysia;
