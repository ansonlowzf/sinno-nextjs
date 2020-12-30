import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { ProductDisplay, QuotationCTA } from "../../components";
import {
  Heading1,
  Heading2,
  SectionWrapper,
  TextWrapper,
} from "../../elements";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },

  h1MT: {
    marginTop: theme.spacing(10),
  },
}));

const MocaCompactSurface = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Moca Compact Surface" />
      {/* <HeroScrollDown
        imgSrc="/blue_pearl.jpg"
        imgText="Sintered Stone"
        title="Sintered Stone"
        subtitle="Supply &amp; Install Sintered Stone Kitchen Top"
      /> */}

      <SectionWrapper>
        <Heading1>Moca Compact Surface</Heading1>
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            Supply &amp; Install Moca Compact Surface Kitchen Top
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
        <QuotationCTA stone="Mocastone" />
      </SectionWrapper>
    </>
  );
};

export default MocaCompactSurface;
