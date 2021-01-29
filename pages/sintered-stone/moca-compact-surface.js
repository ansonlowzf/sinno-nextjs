import { Container, Grid, makeStyles } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { Hero, SlabDisplay, QuotationCTA, SubNavBar } from "../../components";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { ssRoutes } from "../../constants";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },
}));

const MocaCompactSurface = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Moca Compact Surface | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/qp2013-1.jpg"
        imgText="Mocasotne QP2013 Table Top"
        title="Moca Compact Surface"
        subtitle="Supply &amp; Install Moca Compact Surface Kitchen Top"
      />

      <SubNavBar routes={ssRoutes} />

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
            <SlabDisplay
              imgSrc="/sintered-stone/ps6.jpg"
              stoneName="QP 2013 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/ps4.jpg"
              stoneName="QP 2031 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/ps5.jpg"
              stoneName="QP 2032 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/ps1.jpg"
              stoneName="QP 2033B (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/ps2.jpg"
              stoneName="QP 2034 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/ps3.jpg"
              stoneName="QP 2035 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/qp2036a.jpg"
              stoneName="QP 2036A (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
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
