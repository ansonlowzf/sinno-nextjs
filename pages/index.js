import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { BodyT1, StoneCard } from "../src/components";
import { HeroCTA } from "../components";
import { Heading2 } from "../src/elements";
import { SectionWrapper } from "../src/elements/wrapper";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
