import * as React from "react";
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  Fab,
  Zoom,
} from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import { SideDrawer, ActiveLink } from ".";

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    ...theme.mixins.toolbar,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkStyle: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.common.white,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
  },
  menuLinkStyles: {
    marginLeft: theme.spacing(4),
  },
  backToTopStyles: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    zIndex: 999,
    [theme.breakpoints.up("md")]: {
      bottom: theme.spacing(13),
      right: theme.spacing(20),
    },
  },
}));

const routes = [
  { name: "quartz stone", link: "/quartz-stone" },
  { name: "granite", link: "/granite-malaysia" },
  { name: "blog", link: "/blog" },
  { name: "contact us", link: "/contact-us" },
];

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar className={classes.navbarDisplayFlex}>
              <IconButton>
                <ActiveLink activeClassName="active" href="/">
                  <a className={classes.linkStyle}>
                    <Home fontSize="large" style={{ color: `white` }} />
                  </a>
                </ActiveLink>
              </IconButton>

              <Hidden smDown>
                <Toolbar component="nav" className={classes.navContainer}>
                  {routes.map(({ name, link }, index) => (
                    <Typography variant="button" key={`${name}${index}`}>
                      <ActiveLink activeClassName="active" href={link}>
                        <a
                          className={`${classes.linkStyle} ${classes.menuLinkStyles}`}
                        >
                          {name}
                        </a>
                      </ActiveLink>
                    </Typography>
                  ))}
                </Toolbar>
              </Hidden>

              <Hidden mdUp>
                <SideDrawer routes={routes} />
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" className={classes.toolbarContainer} />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export const BackToTop = ({ children }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.backToTopStyles}
      >
        {children}
      </div>
    </Zoom>
  );
};

export const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
