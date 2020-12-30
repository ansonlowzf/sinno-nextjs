import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    ...theme.mixins.toolbar,
  },
}));

export const SubNavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className={classes.toolbarContainer}>
        <Typography>Test 1</Typography>
        <Typography>Test 2</Typography>
        <Typography>Test 3</Typography>
      </Toolbar>
    </AppBar>
  );
};
