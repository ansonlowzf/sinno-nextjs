import * as React from "react";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { NextSeo } from "next-seo";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import {
  QuotationCTA,
  ImageWithDescription,
  Hero,
  StoneCard,
  MaterialArticle,
  SinnoButton,
  FaqAccordion,
  SubNavBar,
} from "../../components";
import { faqQuartzStone } from "../../constants/faq";
import { qsRoutes } from "../../constants/route";

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
      <NextSeo title="Quartz Stone Kitchen Top" />
      <Hero
        imgSrc="/cloudburst1.jpg"
        imgText="Caesarstone cloudburst"
        title="Quartz Stone"
        subtitle="Supply &amp; Install Quartz Stone Kitchen Top"
      />

      <SubNavBar routes={qsRoutes} />

      <SectionWrapper>
        <Heading2>What Is Your Desire Kitchen Top?</Heading2>
        <TextWrapper>
          <Typography component="ul" paragraph>
            <li>
              It should be durable when you are using it for cooking every day.
            </li>
            <li>
              Shall not have any scratch mark when you are using it for family
              cooking.
            </li>
            <li>
              The foods and drink such as carrot, lemon, or coffee should not
              dim or change the kitchen top colour.
            </li>
          </Typography>
          <Typography component="p" variant="h6" align="center" paragraph>
            What features are you looking for?
          </Typography>
          <MaterialArticle />
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>How About These Features?</Heading2>
        <Container maxWidth="sm">
          <iframe
            title="test quartz stone scratch resistant"
            className={classes.iframeMatchParentWidth}
            src="https://www.youtube.com/embed/jcJIQeojqPQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
        <Container maxWidth="sm">
          <iframe
            title="test quartz stone stain resistant"
            className={classes.iframeMatchParentWidth}
            src="https://www.youtube.com/embed/i6N43EqJQpg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
        <Container maxWidth="sm">
          <iframe
            title="test quartz stone heat resistant"
            className={classes.iframeMatchParentWidth}
            src="https://www.youtube.com/embed/CblsvAtVw9c"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container maxWidth="md">
          <ImageWithDescription
            imgSrc="/benefit/stain_resistance.jpg"
            title="Stain Resistance"
            description="Virtually worry-free surfaces. Acids such as lemon juice, lime juice have no effect or could dim the surface. It can be cleaned with soft cloth and water. Red wine stain can be removed with CIF foaming gel or acetone. Daily food such as turmeric, coffee or curry will not stain your kitchen top easily"
          />
          <ImageWithDescription
            imgSrc="/benefit/heat_resistance.jpg"
            title="Heat Resistance"
            description="Although quartz stone can resist heat up to 150°C, we always recommend using trivets or hot pads for hot hots and pans. However, quartz stone can always tolerate brief exposures to moderately hot temperatures."
          />
          <ImageWithDescription
            imgSrc="/benefit/scratch_resistance.jpg"
            title="Scratch Resistance"
            description="Quartz stone is resistant to scratches. Based on Mohs Hardness Scale, lower hardness items such as kitchen tools and utensils will not cause scratches on quartz stone."
          />
          <ImageWithDescription
            imgSrc="/benefit/chemical_resistance.jpg"
            title="Chemical Resistance"
            description="Quartz stone can resist most daily use chemicals like acetone, Clorox, gel polisher, and iodine. We'd recommend avoiding cleaning item such as oven cleaner, grill cleaner, and other cleaners which contains abrasive material inside."
          />
          <ImageWithDescription
            imgSrc="/benefit/mildew_resistance.jpg"
            title="Mildew Resistance"
            description="Non porous material prevent growth of mold, mildew and bacteria on the surface. In another words, there is no room on the surface for them to live"
          />
          <ImageWithDescription
            imgSrc="/benefit/non_porous.jpg"
            title="Non-Porous Material"
            description="Quartz stone requests minimum effect of maintenance and never need to apply any sealant every few year to protect the surface. It's resilient and non-porous. Natural stone like marble require multiple sealants to maintain luster, extend the lifetime of its beautiful surface and increase its stain resistance level. "
          />
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
                linkUrl="/caesarstone"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StoneCard
                imgSrc="/poblenou_1.jpg"
                stone="Silestone"
                description="Spain Brand Quartz Surface"
                linkUrl="/silestone"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StoneCard
                imgSrc="/grey_mirror.jpg"
                stone="Zenstone"
                description="Malaysia Brand Quartz Surface"
                linkUrl="./zenstone-malaysia"
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
