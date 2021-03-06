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
        imgText="Mocastone QP2013 Table Top"
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
              imgSrc="/sintered-stone/QP02.jpeg"
              stoneName="QP 02 (11mm) Smooth Matt"
              price="RM 200 per FR / RM 110 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/QP03.jpeg"
              stoneName="QP 03 (11mm) Smooth Matt"
              price="RM 200 per FR / RM 110 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/qp07-matt.jpeg"
              stoneName="QP 07 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/qp12-matt.jpeg"
              stoneName="QP 12 (12mm) Smooth Matt"
              price="RM 300 per FR / RM 160 per SF"
            />

            <SlabDisplay
              imgSrc="/sintered-stone/QP104.jpeg"
              stoneName="QP104  (11mm) Smooth Matt"
              price="RM 200 per FR / RM 110 per SF"
            />

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
        <QuotationCTA stone="Moca Compact Stone" />
      </SectionWrapper>
    </>
  );
};

export default MocaCompactSurface;
