import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { StoneCard } from "../src/components";
import { HeroCTA, BodyT1, FaqAccordion } from "../components";
import { Heading2, SectionWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { faqHomepage } from "../constants/faq";

const Home = () => {
  return (
    <>
      <NextSeo title="Stone Mason Malaysia" />
      <HeroCTA
        image="/factory-entrance.jpg"
        imageText="factory entrance"
        title="Stone Kitchen Top Specialist"
        description="Specializing In Custom Made Stone Kitchen Top"
      />
      <SectionWrapper>
        <BodyT1 title="What We Do?" />
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Stone Product</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard stone="Quartz Stone" description="Engineered Stone" />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard stone="Granite" description="Natural Stone" />
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
