import * as React from "react";
import { NextSeo } from "next-seo";
import { SectionWrapper, TextWrapper, Heading2 } from "../elements";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Paper,
  Container,
} from "@material-ui/core";
import Image from "next/image";
import {
  ColourWarning,
  QuotationCTA,
  HeroScrollDown,
  QuartzStoneFAB,
} from "../components";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },
  headingStyle: {
    padding: theme.spacing(2),
  },
  imageBorder: {
    border: `1px solid grey`,
  },
  textPadding: {
    paddingTop: theme.spacing(1),
  },
}));

const ZenstoneMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Zenstone Malaysia" />
      <HeroScrollDown
        imgSrc="/calacatta_black.jpg"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Supply &amp; Install Zenstone Kitchen Top"
      />

      <SectionWrapper>
        <Grid container justify="center">
          <Grid item xs={10} md={2}>
            <Image src="/zenstone_logo.png" width={800} height={600} />
          </Grid>
        </Grid>
        <TextWrapper>
          <Typography paragraph>{`
        A Malaysia's quartz stone's developed by Aston Builder in the year 2013 and was acquired by Stone Innovations Enterprise in the first quarter of the year 2017.
        `}</Typography>
          <Typography
            paragraph
          >{`Genuine quartz stone direct import from China which meet international SGS standard. Real quartz stone which comes with ten years limited warranty. More than 60 colours option.
        `}</Typography>
          <Typography>
            You could read the{" "}
            <a href="./material-pros-cons" className="link-style">
              material pros and cons short article
            </a>{" "}
            or{" "}
            <a href="./material-rating" className="link-style">
              material rating chart
            </a>{" "}
            as a reference to choose the material for your kitchen top.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2 path="zenstone">Colour &amp; Pricing</Heading2>
        <Container maxWidth="md">
          <Box
            bgcolor="primary.light"
            className={`${classes.sectionMargin} ${classes.headingStyle}`}
          >
            <Typography component="h3" variant="h4" align="center" gutterBottom>
              {`Classic Series`}
            </Typography>
            <Typography align="center">{`RM 220/FR or RM 120/SF`}</Typography>
          </Box>

          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101521.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                White Mirror
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q101523.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Snow White
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q101503.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Smoothie White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101522.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Black Mirror
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101508.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Smoothie Beige
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q3015.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Shell King
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q101509.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Red Mirror
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101506.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Smoothie Grey
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101525.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Beige Mirror
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q101511.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Blue Mirror
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q101510.jpg"
                width={350}
                height={350}
              />

              <Typography align="center" className={classes.textPadding}>
                Brown Mirror
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101524.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Grey Mirror
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101526.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Crystal White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q101528.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Icy White
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Box
            bgcolor="primary.light"
            className={`${classes.sectionMargin} ${classes.headingStyle}`}
          >
            <Typography component="h3" variant="h4" align="center" gutterBottom>
              {`Premium Series`}
            </Typography>
            <Typography align="center">{`RM 250/FR or RM 135/SF`}</Typography>
          </Box>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q601504.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Cameo
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q601509.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Golden Coffee
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q601501.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Blue Sapphire
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q201506.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Grey Forest
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q202032.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Pure Grey
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q401501.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Black Ruby
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q601503.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                White Gold
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q601502.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Beige Gold
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q601507.JPEG"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Beige Gold Medium
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q601505.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Black Gold
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q4015.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Purple Galaxy
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q201504.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Pure White
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q201501.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Brown Cream
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q201505.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Pure Black
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Box
            bgcolor="primary.light"
            className={`${classes.sectionMargin} ${classes.headingStyle}`}
          >
            <Typography component="h3" variant="h4" align="center" gutterBottom>
              {`Noble Series`}
            </Typography>
            <Typography align="center">{`RM 280/FR or RM 150/SF`}</Typography>
          </Box>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802003.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                De Fantasy
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper
                component={Image}
                src="/zenstone/Q201541.jpg"
                width={350}
                height={350}
              />
              <Typography align="center" className={classes.textPadding}>
                Super White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802008.jpg"
                width={800}
                height={300}
              />
              <Typography align="center" className={classes.textPadding}>
                Grey Land
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Box
            bgcolor="primary.light"
            className={`${classes.sectionMargin} ${classes.headingStyle}`}
          >
            <Typography component="h3" variant="h4" align="center" gutterBottom>
              {`Marble Series`}
            </Typography>
            <Typography align="center">{`RM 310/FR or RM 165/SF`}</Typography>
          </Box>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q801501slab.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Cararra White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q801534.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Black Ice Bloom
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802021.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Snow Flower
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802022.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Calacatta Black
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802023.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Arabescato Corchia
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802025.jpeg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Black Marquina
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802026.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Fabricator White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802027.jpg"
                width={700}
                height={400}
              />
              <Typography align="center" className={classes.textPadding}>
                Staturio White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper
                component={Image}
                src="/zenstone/Q802031-slab.jpg"
                width={700}
                height={500}
              />
              <Typography align="center" className={classes.textPadding}>
                Calacatta Venato
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Quartz" />
      </SectionWrapper>

      <QuartzStoneFAB />
    </>
  );
};

export default ZenstoneMalaysia;
