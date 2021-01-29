import {
  makeStyles,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Smartphone, WhatsApp } from "@material-ui/icons";
import * as React from "react";
import { SectionWrapper } from "../elements";
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
      <NextSeo title="Contact Us | Stone Innovations Enterprise" />

      <SectionWrapper>
        <Container maxWidth="lg" className={classes.containerStyles}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            className={classes.h1Styles}
          >
            Contact Us
          </Typography>

          <Grid container>
            <Grid
              container
              item
              xs={12}
              md={6}
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

            <Grid container item xs={12} md={6} direction="column">
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
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default ContactUs;
