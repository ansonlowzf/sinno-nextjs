import * as React from "react";
import { QuotationCTA } from "../components";
import { SectionWrapper, TextWrapper, Heading2 } from "../elements";
import {
  makeStyles,
  Container,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import Image from "next/image";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },

  h1MT: {
    marginTop: theme.spacing(10),
  },
}));

const graniteMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Sintered Stone" />
      {/* <HeroScrollDown
        imgSrc="/blue_pearl.jpg"
        imgText="Sintered Stone"
        title="Sintered Stone"
        subtitle="Supply &amp; Install Sintered Stone Kitchen Top"
      /> */}

      <SectionWrapper>
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          className={classes.h1MT}
        >
          Sintered Stone
        </Typography>
        <Typography component="h2" variant="h6" align="center">
          Supply &amp; Install Sintered Stone Kitchen Top
        </Typography>
      </SectionWrapper>

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
        </TextWrapper>
      </SectionWrapper>

      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          className={classes.sectionMargin}
          justify="center"
        >
          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps6.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2013</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps4.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2031</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps5.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2032</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps1.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2033B</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps2.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2034</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/sintered-stone/ps3.jpg"
              width={900}
              height={700}
            />
            <Typography align="center">QP 2035</Typography>
          </Grid>
        </Grid>
      </Container>

      <QuotationCTA stone="Sintered Stone" />
    </>
  );
};

export default graniteMalaysia;
