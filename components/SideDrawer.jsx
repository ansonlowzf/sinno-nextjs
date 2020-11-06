import * as React from "react";
import {
  SwipeableDrawer,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import { ActiveLink } from "../components";

const useStyles = makeStyles((theme) => ({
  sideDrawerStyles: {
    width: 250,
    marginTop: `auto`,
    marginBottom: `auto`,
  },
  drawerColor: {
    backgroundColor: theme.palette.primary.main,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `capitalize`,
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  textStyle: {
    marginTop: theme.spacing(5.75),
    marginLeft: theme.spacing(5),
  },

  menuStyle: {
    color: theme.palette.common.white,
  },
  sideDrawerLinkContainer: {
    marginTop: theme.spacing(5),
  },

  sideDrawerLink: {
    marginLeft: theme.spacing(5),
    color: theme.palette.common.white,
    textDecoration: `none`,
    textTransform: `uppercase`,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
  },
}));

export const SideDrawer = ({ routes }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const SideDrawerList = (anchor) => (
    <div
      className={classes.sideDrawerStyles}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {routes.map(({ name, link }, index) => (
        <Typography
          display="block"
          variant="button"
          key={`${name}${index}`}
          className={classes.sideDrawerLinkContainer}
        >
          <ActiveLink activeClassName="active" href={link}>
            <a className={classes.sideDrawerLink}>{name}</a>
          </ActiveLink>
        </Typography>
      ))}
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" className={classes.menuStyle} />
      </IconButton>

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
        classes={{
          paper: classes.drawerColor,
        }}
      >
        {SideDrawerList("right")}
      </SwipeableDrawer>
    </>
  );
};
