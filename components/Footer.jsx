import * as React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Container,
  Grid,
  Hidden,
} from "@material-ui/core";
import { Facebook, Email, Twitter, Instagram } from "@material-ui/icons";
import { ActiveLink } from "../components";

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
  mainLinkStyle: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.secondary.main,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
  },
  subLlinkStyle: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.common.white,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
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

      <Hidden mdDown>
        <Box my={10}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item sm={3}>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/quartz-stone">
                    <a className={classes.mainLinkStyle}>Quartz Stone</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink
                    activeClassName="active"
                    href="/quartz-stone/caesarstone"
                  >
                    <a className={classes.subLlinkStyle}>Caesarstone</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink
                    activeClassName="active"
                    href="/quartz-stone/silestone"
                  >
                    <a className={classes.subLlinkStyle}>Silestone</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink
                    activeClassName="active"
                    href="/quartz-stone/zenstone"
                  >
                    <a className={classes.subLlinkStyle}>Zenstone</a>
                  </ActiveLink>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/sintered-stone">
                    <a className={classes.mainLinkStyle}>Sintered Stone</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink
                    activeClassName="active"
                    href="/sintered-stone/dekton"
                  >
                    <a className={classes.subLlinkStyle}>Dekton</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink
                    activeClassName="active"
                    href="/sintered-stone/moca-compact-surface"
                  >
                    <a className={classes.subLlinkStyle}>Moca</a>
                  </ActiveLink>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/granite">
                    <a className={classes.mainLinkStyle}>Granite</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/granite/sensa">
                    <a className={classes.subLlinkStyle}>Sensa</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/granite">
                    <a className={classes.subLlinkStyle}>OEM Granite</a>
                  </ActiveLink>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/blog">
                    <a className={classes.mainLinkStyle}>Blog</a>
                  </ActiveLink>
                </Box>
                <Box display="block" variant="subtitle2" lineHeight={2}>
                  <ActiveLink activeClassName="active" href="/contact-us">
                    <a className={classes.mainLinkStyle}>Contact Us</a>
                  </ActiveLink>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Hidden>

      <Typography align="center">
        © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
      </Typography>
    </footer>
  );
};
