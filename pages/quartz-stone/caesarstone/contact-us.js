import {
  makeStyles,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import { SectionWrapper } from "../../../elements";
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
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Contact Us | Caesarstone |Stone Innovations Enterprise" />

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

          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Grid container item justify="center">
                <IconButton
                  component="a"
                  href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                  style={{ color: "#f58026" }}
                >
                  <WhatsApp style={{ fontSize: 60 }} />
                </IconButton>
              </Grid>
              <a
                href="https://api.whatsapp.com/send?phone=+60193109773&text=&source=&data=&app_absent="
                style={{ textDecoration: `none` }}
              >
                <Typography align="center">
                  <Box py={4} color="text.primary">
                    Click the button above to WhatsApp or <br />
                    Call Anson Low @{" "}
                    <a href="tel:+60193109773">019-310 9773 </a>
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
