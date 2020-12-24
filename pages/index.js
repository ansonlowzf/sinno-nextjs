import * as React from "react";
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { Hero, BodyT1, FaqAccordion, StoneCard } from "../components";
import { Heading2, SectionWrapper, TextWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { faqHomepage } from "../constants/faq";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  videoStyle: {
    position: `relative`,
    width: `100%`,
    height: 450,
    [theme.breakpoints.down("sm")]: {
      height: 390,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Stone Mason Malaysia" />
      <Hero
        imgSrc="/factory-entrance.jpg"
        imgText="factory entrance"
        title="Stone Surface Mason"
        subtitle="Quartz Stone | Granite | Sintered Stone | Marble | Onyx"
        idPath="stones"
      />

      <SectionWrapper>
        <Heading2>Stone Innovations Enterprise</Heading2>
        <TextWrapper>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Business Registration No.:-</Box>{" "}
            201603220786 (002560776-H)
          </Typography>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Sales Office:-</Box> 45-1-1, Jalan
            Medan Putra 6, Medan Putra Business Center, Bandar Menjalara 52200
            KL
          </Typography>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">
              Factory &amp; Warehosue Address:-
            </Box>{" "}
            944E, Kampung Baru Sungai Buloh, 47000, Sungai Buloh, Selangor D.E
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <BodyT1
          title="What We Do?"
          imgSrc="/empira_white.jpg"
          imgText="Caesarstone empira white"
          description={`We fabricate, supply & install Quartz Stone, Granite, Sintered Stone
                (AKA Porcelain Slab or Ultra-Compact stone), Marble and Onyx for kitchen top, wall cladding or
                flooring application.`}
        />
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Heading2>Warehouse</Heading2>
          <TextWrapper>
            <Typography
              component="h3"
              variant="subtitle1"
              align="center"
              paragraph
            >
              There are more than 800 slabs quartz stone, granite, sintered
              stone, marble and onyx available to fulfil your renovation needs.
            </Typography>
          </TextWrapper>
          <Grid container justify="center">
            <Grid item>
              <Image
                src="/aboutus/factory2.JPG"
                alt="Warehouse"
                width={800}
                height={450}
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Warehouse Walkthrough</Heading2>
        <TextWrapper>
          <Typography
            component="h3"
            variant="subtitle1"
            align="center"
            paragraph
          >
            Showing our available stock for all kinds of surface application
          </Typography>
        </TextWrapper>
        <Container maxWidth="md">
          <Paper elevation={4}>
            <Grid container justify="center">
              <iframe
                title="stone distributor warehouse walkthrough"
                className={classes.videoStyle}
                src="https://www.youtube.com/embed/n_aPfgbuSDA"
                scrolling="no"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>{" "}
            </Grid>
          </Paper>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2 idPath="stones">Stone Product</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/grey_mirror.jpg"
                stone="Quartz Stone"
                description="Engineered Stone"
                linkUrl="/quartz-stone"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/blue_pearl.jpg"
                stone="Granite"
                description="Natural Stone"
                linkUrl="/granite-malaysia"
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Frequently Ask Question</Heading2>
        <Container maxWidth="sm">
          {faqHomepage.map(({ question, answer, id }) => (
            <FaqAccordion key={id} question={question} answer={answer} />
          ))}
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Home;
