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

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },
}));

const graniteMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <HeroScrollDown
        imgSrc="/blue_pearl.jpg"
        imgText="Sintered Stone"
        title="Sintered Stone"
        subtitle="Supply &amp; Install Sintered Stone Kitchen Top"
      />
      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour</Heading2>
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
