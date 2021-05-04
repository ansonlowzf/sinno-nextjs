import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { Hero, FaqAccordion, StoneCard } from "../components";
import { Heading2, SectionWrapper, TextWrapper } from "../elements";
import { NextSeo } from "next-seo";
import { faqHomepage } from "../constants/faq";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  videoStyle: {
    position: `relative`,
    width: `100%`,
    height: 450,
    [theme.breakpoints.down("sm")]: {
      height: 390,
    },
  },

  descriptionStyles: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(5),
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Stone Mason Malaysia | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/factory-entrance.jpg"
        imgText="factory entrance"
        title="Stone Surface Mason"
        subtitle="Quartz Stone | Sintered Stone | Granite | Marble | Onyx"
        idPath="stones"
      />

      <SectionWrapper>
        <Heading2>Stone Innovations Enterprise</Heading2>
        <TextWrapper>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Business Registration No.:-</Box>{" "}
            201603220786 (002560776-H)
          </Typography>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">Sales Office:-</Box> 45-1-1, Jalan
            Medan Putra 6, Medan Putra Business Center, Bandar Menjalara 52200
            KL
          </Typography>
          <Typography align="center" paragraph>
            <Box fontWeight="fontWeightBold">
              Factory &amp; Warehosue Address:-
            </Box>{" "}
            944E, Kampung Baru Sungai Buloh, 47000, Sungai Buloh, Selangor D.E
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              container
              item
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
            >
              <Heading2>What We Do?</Heading2>
              <TextWrapper>
                <Typography
                  align="center"
                  className={classes.descriptionStyles}
                >
                  We fabricate, supply &amp; install{" "}
                  <span className="highlight">Quartz Stone</span>,{" "}
                  <span className="highlight">Granite</span>,{" "}
                  <span className="highlight">Sintered Stone</span> (AKA
                  Porcelain Slab or Ultra-Compact stone),{" "}
                  <span className="highlight">Marble</span> and{" "}
                  <span className="highlight">Onyx</span> for{" "}
                  <span className="highlight">kitchen top</span>,{" "}
                  <span className="highlight">vanity top</span>,{" "}
                  <span className="highlight">tabletop</span>,{" "}
                  <span className="highlight">countertop</span>,{" "}
                  <span className="highlight">wall cladding</span>,{" "}
                  <span className="highlight">fascades</span> or{" "}
                  <span className="highlight">flooring</span> application.
                </Typography>
              </TextWrapper>
            </Grid>
            <Grid container item xs={12} md={6} alignItems="center">
              <Image
                src="/empira_white.jpg"
                alt="Caesarstone Empira White"
                width={800}
                height={450}
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Heading2>Warehouse</Heading2>
          <TextWrapper>
            <Typography
              component="h3"
              variant="subtitle1"
              align="center"
              paragraph
            >
              There are more than 800 slabs surfacing ready stock available to
              fulfil your renovation needs.
            </Typography>
          </TextWrapper>
          <Grid container justify="center">
            <Grid item>
              <Image
                src="/aboutus/factory2.JPG"
                alt="Warehouse"
                width={800}
                height={450}
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Warehouse Walkthrough</Heading2>
        <TextWrapper>
          <Typography
            component="h3"
            variant="subtitle1"
            align="center"
            paragraph
          >
            Showing our available stock for all kinds of surface application
          </Typography>
        </TextWrapper>
        <Container maxWidth="md">
          <Paper elevation={4}>
            <Grid container justify="center">
              <iframe
                title="stone distributor warehouse walkthrough"
                className={classes.videoStyle}
                src="https://www.youtube.com/embed/n_aPfgbuSDA"
                scrolling="no"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>{" "}
            </Grid>
          </Paper>
        </Container>
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
                linkUrl="/granite"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/bergen_1.jpg"
                stone="Sintered Stone"
                description="Engineered Stone"
                linkUrl="/sintered-stone"
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
