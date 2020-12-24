import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import { NextSeo } from "next-seo";
import * as React from "react";
import { ProductDisplay, QuotationCTA } from "../components";
import { Heading2, SectionWrapper, TextWrapper } from "../elements";
import Image from "next/image";

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
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            Supply &amp; Install Sintered Stone (AKA Porcelain Slab or Porcelain
            Surface) Kitchen Top
          </Typography>
        </TextWrapper>
      </SectionWrapper>

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
            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps6.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2013 (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps4.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2031 (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps5.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2032 (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps1.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2033B (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps2.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2034 (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/ps3.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2035 (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={Image}
                src="/sintered-stone/qp2036a.jpg"
                width={800}
                height={600}
              />
              <Grid container item justify="space-evenly">
                <Typography align="center">
                  QP 2036A (12mm) Smooth Matt
                </Typography>
                <Typography align="center">
                  RM 220 per FR / RM 120 per SF
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Sintered Stone" />
      </SectionWrapper>
    </>
  );
};

export default graniteMalaysia;
