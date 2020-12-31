import {
  makeStyles,
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ActiveLink } from "../components";

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    ...theme.mixins.toolbar,
    display: `flex`,
    justifyContent: `space-evenly`,
  },
  linkStyle: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.common.black,
    opacity: 0.5,
    "&.active": {
      opacity: 1,
    },
  },
}));

export const SubNavBar = ({ routes }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="md">
        <Toolbar className={classes.toolbarContainer}>
          {routes.map(({ name, link }, index) => (
            <Typography variant="button" key={`${name}${index}`}>
              <ActiveLink activeClassName="active" href={link}>
                <a className={classes.linkStyle}>{name}</a>
              </ActiveLink>
            </Typography>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
