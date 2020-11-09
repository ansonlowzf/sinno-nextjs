import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { Hero, BodyT1, FaqAccordion, StoneCard } from "../components";
import { Heading2, SectionWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { faqHomepage } from "../constants/faq";

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
        <BodyT1 title="What We Do?" imgSrc="/empira_white.jpg" />
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
