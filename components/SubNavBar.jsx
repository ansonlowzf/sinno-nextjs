import {
  makeStyles,
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ActiveLink } from "../components";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
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
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          spacing={2}
          className={classes.gridStyle}
        >
          {routes.map(({ name, link }, index) => (
            <Grid
              container
              item
              justify="space-evenly"
              alignItems="center"
              key={`${name}${index}`}
              xs={12}
              sm={4}
            >
              <ActiveLink activeClassName="active" href={link}>
                <Typography
                  component="a"
                  variant="button"
                  align="center"
                  className={classes.linkStyle}
                >
                  {name}
                </Typography>
              </ActiveLink>
            </Grid>
          ))}
        </Grid>
        {/* <Toolbar className={classes.toolbarContainer}>
          {routes.map(({ name, link }, index) => (
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              spacing={2}
            >
              <Grid item key={`${name}${index}`} xs={12}>
                <ActiveLink activeClassName="active" href={link}>
                  <Typography
                    component="a"
                    variant="button"
                    align="center"
                    className={classes.linkStyle}
                  >
                    {name}
                  </Typography>
                </ActiveLink>
              </Grid>
            </Grid>
          ))}
        </Toolbar> */}
      </Container>
    </AppBar>
  );
};
