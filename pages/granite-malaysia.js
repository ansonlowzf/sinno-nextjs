import * as React from "react";
import { HeroScrollDown, QuotationCTA } from "../components";
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
}));

const graniteMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Granite Malaysia" />
      <HeroScrollDown
        imgSrc="/blue_pearl.jpg"
        imgText="Granite Blue Pearl"
        title="Granite"
        subtitle="Supply &amp; Install Granite Kitchen Top"
      />
      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour</Heading2>
          <Typography align="center">Thickness: 17mm - 18mm</Typography>
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
              src="/granite/black-galaxy.JPEG"
              width={800}
              height={400}
            />
            <Typography align="center">Black Galaxy</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/blue-pearl.JPG"
              width={800}
              height={400}
            />
            <Typography align="center">Blue Pearl</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/bourbon-grey.JPG"
              width={800}
              height={400}
            />
            <Typography align="center">Bourbon Grey</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/emerald-pearl.JPG"
              width={800}
              height={400}
            />
            <Typography align="center">Emerald Pearl</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/imperial-red.JPG"
              width={800}
              height={400}
            />
            <Typography align="center">Imperial Red</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/white-wave.JPG"
              width={800}
              height={400}
            />
            <Typography align="center">White Wave</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component={Image}
              src="/granite/xan-xi-black.JPEG"
              width={800}
              height={400}
            />
            <Typography align="center">Xan Xi Black</Typography>
          </Grid>
        </Grid>
      </Container>

      <QuotationCTA stone="Granite" />
    </>
  );
};

export default graniteMalaysia;
