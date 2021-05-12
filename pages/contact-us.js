import {
  makeStyles,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Smartphone, WhatsApp, EmailOutlined } from "@material-ui/icons";
import * as React from "react";
import { SectionWrapper, Heading1, Heading2, TextWrapper } from "../elements";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
  },
  h1Styles: {
    marginBottom: theme.spacing(13),
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  mobileIconStyles: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(10),
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo
        title="Contact Us | Stone Innovations Enterprise"
        description="Contact us by WhatsApp, Call or Email for all kinds of stone surfacing inquiries."
      />

      <SectionWrapper>
        <Heading1>Contact Us</Heading1>
      </SectionWrapper>

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
            <Box fontWeight="fontWeightBold">Warehouse:-</Box> Lot 2201, Jalan
            Industri 10, Kampung Baru Sungai Buloh, 40160 Shah Alam, Selangor
          </Typography>
          <Typography align="center" color="error">
            <Box fontWeight="fontWeightBold">
              Please make an appointment before visiting the sales office or
              warehouse. Apology for any inconvenience caused, we have to
              control the numbers of visitors.
            </Box>
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg" className={classes.containerStyles}>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              md={4}
              direction="column"
              className={classes.mobileIconStyles}
            >
              <Grid container item justify="center">
                <IconButton
                  component="a"
                  href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                  color="primary"
                >
                  <WhatsApp style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                style={{ textDecoration: `none` }}
              >
                <Typography align="center">
                  <Box py={2} color="text.primary">
                    Anson Low @ 019-310 9773 <br />
                    WhatsApp
                  </Box>
                </Typography>
              </a>
            </Grid>

            <Grid container item xs={12} md={4} direction="column">
              <Grid container item justify="center">
                <IconButton
                  component="a"
                  href="tel:+0193109773"
                  color="primary"
                >
                  <Smartphone style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                style={{ textDecoration: `none` }}
              >
                <Typography align="center">
                  <Box py={2} color="text.primary">
                    Anson Low @ 019-310 9773 <br />
                    Call
                  </Box>
                </Typography>
              </a>
            </Grid>

            <Grid container item xs={12} md={4} direction="column">
              <Grid container item justify="center">
                <IconButton
                  component="a"
                  href="mailto:contact@stoneinnovations.com.my"
                  color="primary"
                >
                  <EmailOutlined style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="mailto:contact@stoneinnovations.com.my"
                style={{ textDecoration: `none` }}
              >
                <Typography align="center">
                  <Box py={2} color="text.primary">
                    contact@stoneinnovations.com.my
                  </Box>
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default ContactUs;
