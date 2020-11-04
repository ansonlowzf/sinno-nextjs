import * as React from "react";
import { Heading2, SectionWrapper, FaqWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import { faqAbout } from "../constants/faq";
import { FaqAccordion, HeroCenterCTA } from "../components";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <NextSeo title="About Us" />
      <HeroCenterCTA
        imgSrc="/factory-entrance.jpg"
        title="About Us"
        btnText="Explore"
      />
      <SectionWrapper>
        <Heading2>Stone Innovations Enterprise</Heading2>
        <Typography component="p" variant="body1" align="center" paragraph>
          {`Business Registration No.: 002560776-H`}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          align="center"
          style={{ marginBottom: `3rem` }}
        >
          {`Factory Address:- 944E, Kampung Baru Sungai Buloh, 47000, Sungai Buloh, Selangor D.E`}
        </Typography>
      </SectionWrapper>

      <Grid container item justify="center">
        <Paper
          component={Image}
          elevation={4}
          src="/aboutus/factory2.JPG"
          alt="Factory"
          width={800}
          height={500}
        />
      </Grid>

      <SectionWrapper>
        <Heading2>Why Choose Us?</Heading2>
        <Container maxWidth="md">
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Typography component="ol">
                <li>{`Specializing in stone's industry for 9 years.`}</li>
                <li>{`Up to 800 quartz stone slabs are in stock`}</li>
                <li>{`
        Genuine quartz stone only (No! artificial quartz, compressed
        marble pretend as quartz)
        `}</li>
                <li>{`
        Sales reps equipped with quartz stone knowledge, they can answer
        95% of your questions regarding quartz stone
        `}</li>
                <li>{`Ten limited warranty on material`}</li>
                <li>{`Five years limited warranty on workmanship`}</li>
                <li>{`Two cutting machines, 4 fabrication workstation`}</li>
                <li>{`97% installation on time`}</li>
                <li>{`Four installation teams lead by a stone's master`}</li>
                <li>{`No hidden cost - prices are listed on the website.`}</li>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <Grid container item justify="center">
        <Paper
          component={Image}
          elevation={4}
          src="/aboutus/factory3.jpg"
          alt="Factory"
          width={800}
          height={500}
        />
      </Grid>

      <SectionWrapper>
        <Heading2>Frequently Ask Questions</Heading2>
        <FaqWrapper>
          {faqAbout.map(({ question, answer, id }) => (
            <FaqAccordion key={id} question={question} answer={answer} />
          ))}
        </FaqWrapper>
      </SectionWrapper>
    </>
  );
};

export default AboutUs;
