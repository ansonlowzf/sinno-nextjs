import * as React from "react";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { NextSeo } from "next-seo";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import {
  QuotationCTA,
  QsBenefit,
  Hero,
  StoneCard,
  MaterialArticle,
  SinnoButton,
  FaqAccordion,
  SubNavBar,
} from "../../components";
import { faqQuartzStone } from "../../constants/faq";
import { qsRoutes } from "../../constants/route";
import QsP from "../../sections/QsP";
import QsA from "../../sections/QsA";
import QsS from "../../sections/QsS";

const useStyles = makeStyles((theme) => ({
  textPB: {
    marginBottom: theme.spacing(5),
  },
  iframeMatchParentWidth: {
    position: `relative`,
    width: `100%`,
    height: 300,
    marginBottom: theme.spacing(2),
  },
}));

const QuartzStonePage = () => {
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title="Quartz Stone | Stone Innovations Enterprise"
        description="Supply &amp; Install Quartz Stone for All Kinds of Countertops Application."
      />
      <Hero
        imgSrc="/cloudburst1.jpg"
        imgText="Caesarstone cloudburst"
        title="Quartz Stone"
        subtitle="Supply &amp; Install Quartz Stone Kitchen Top"
      />

      <SubNavBar routes={qsRoutes} />

      <SectionWrapper>
        <QsP />
        <QsA />
        <QsS />
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <QsBenefit
              imgSrc="/benefit/stain_resistance.jpg"
              title="Stain Resistance"
              description="Virtually worry-free surfaces. Acidic food such as lemon juice
              or lime juice does not affect or could dim the surface. We can
              remove heavy colouring food such as red wine, turmeric, coffee
              or curry's stain with CIF cleaning cream or acetone. Most of the
              time, we can clean quartz stone top with soft cloth and water."
            />
            <QsBenefit
              imgSrc="/benefit/heat_resistance.jpg"
              title="Heat Resistance"
              description="Although quartz stone can resist heat up to 150°C, we recommend using trivets or hot pads for hot pots and pans. However, quartz stone can always tolerate brief exposures to moderately hot temperatures."
            />
            <QsBenefit
              imgSrc="/benefit/scratch_resistance.jpg"
              title="Scratch Resistance"
              description="Quartz stone resists scratches from most of the kitchen utensil. Quartz stone is scale 7 based on Mohs Hardness Scale, lower scale such as knife and nail will not cause scratches on quartz stone."
            />
            <QsBenefit
              imgSrc="/benefit/chemical_resistance.jpg"
              title="Chemical Resistance"
              description="Quartz stone resists scratches from most of the kitchen utensil. Quartz stone is scale 7 based on Mohs Hardness Scale, lower scale such as knife and nail will not cause scratches on quartz stone."
            />
            <QsBenefit
              imgSrc="/benefit/mildew_resistance.jpg"
              title="Mildew Resistance"
              description="Non-porous material prevents the growth of mould, mildew and bacteria on the surface. In other words, there is no room on the surface for them to live."
            />
            <QsBenefit
              imgSrc="/benefit/non_porous.jpg"
              title="Non-Porous Material"
              description="Quartz stone requests minimum maintenance and never needs to apply any sealant every few years to protect the surface. It's resilient and non-porous. Natural stone like marble requires multiple sealants to maintain luster, extend the lifetime of its beautiful surface and increase its stain resistance level."
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Warranty</Heading2>
        <TextWrapper>
          <Typography align="center" paragraph>
            {`What if the quartz countertop you bought from us is crack, chip-off, mildew growth, colour dimming without any impact?`}
          </Typography>
          <Typography component="p" variant="body1" align="center" paragraph>
            {`First, check out the warranty`}
          </Typography>
          <SectionWrapper>
            <SinnoButton linkUrl="/blog/warranty" btnText="Warranty" />
          </SectionWrapper>
          <Typography variant="h6" align="center">
            {`If under warranty, we replace a new set for you - FREE OF CHARGE!`}
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Heading2>Quartz Stone Brands</Heading2>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={4}>
              <StoneCard
                imgSrc="/airy_concrete.jpg"
                stone="Caesarstone"
                description="US Brand Quartz Surface"
                linkUrl="/quartz-stone/caesarstone"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StoneCard
                imgSrc="/poblenou_1.jpg"
                stone="Silestone"
                description="Spain Brand Quartz Surface"
                linkUrl="/quartz-stone/silestone"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StoneCard
                imgSrc="/grey_mirror.jpg"
                stone="Zenstone"
                description="Malaysia Brand Quartz Surface"
                linkUrl="/quartz-stone/zenstone"
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Quartz" />
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Frequently Ask Question</Heading2>
        <Container maxWidth="sm">
          {faqQuartzStone.map(({ question, answer, id }) => (
            <FaqAccordion key={id} question={question} answer={answer} />
          ))}
        </Container>
      </SectionWrapper>
    </>
  );
};

export default QuartzStonePage;
