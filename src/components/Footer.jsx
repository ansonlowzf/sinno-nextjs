import * as React from "react";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import { Facebook, Email, Twitter, Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footerStyles: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  linkStyles: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  iconContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  iconStyles: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <Container maxWidth="lg" className={classes.iconContainer}>
        <Grid container item justify="center">
          <a
            href="https://www.facebook.com/SinnoENT/"
            className={classes.linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize="large" className={classes.iconStyles} />
          </a>
          <a
            href="https://www.instagram.com/SinnoENT/"
            className={classes.linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" className={classes.iconStyles} />
          </a>
          <a
            href="https://twitter.com/StoneInnovatio3"
            className={classes.linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter fontSize="large" className={classes.iconStyles} />
          </a>
          <a
            href="mailto:enquiry@stoneinnovations.com.my"
            className={classes.linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email fontSize="large" className={classes.iconStyles} />
          </a>
        </Grid>
      </Container>

      <Typography align="center">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </footer>
  );
};
