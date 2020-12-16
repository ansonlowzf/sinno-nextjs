import * as React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Hero, BodyT1, FaqAccordion, StoneCard } from "../components";
import { Heading2, SectionWrapper, TextWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { faqHomepage } from "../constants/faq";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <NextSeo title="Stone Mason Malaysia" />
      <Hero
        imgSrc="/factory-entrance.jpg"
        imgText="factory entrance"
        title="Stone Surface Mason"
        subtitle="Kitchen Top | Wall Cladding | Flooring"
        idPath="stones"
      />

      <SectionWrapper>
        <Heading2>Stone Innovations Enterprise</Heading2>
        <TextWrapper>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Business Registration No.:</Box>{" "}
            201603220786
          </Typography>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Sales Office:-</Box> 45-1-1, Jalan
            Medan Putra 6, Medan Putra Business Center, Bandar Menjalara 52200
            KL
          </Typography>
          <Typography align="center">
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
          description={`We fabricate, supply & install Quartz Stone, Sintered Stone
                (AKA Porcelain Slab or Ultra-Compact stone) and Granite for kitchen top, wall cladding or
                flooring application.`}
          btnText="About Us"
          linkUrl="/about-us"
        />
      </SectionWrapper>

      <Container maxWidth="md">
        <Heading2>Warehouse</Heading2>
        <TextWrapper>
          <Typography align="center">
            More than 800 slabs quartz stone, granite, sintered stone, marble
            ready stock
          </Typography>
        </TextWrapper>
        <Grid container justify="center">
          <Grid item>
            <Image
              src="/aboutus/factory2.JPG"
              alt="Factory"
              width={800}
              height={450}
            />
          </Grid>
        </Grid>
      </Container>

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
