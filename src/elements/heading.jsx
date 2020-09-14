import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading2Styles: {
    padding: theme.spacing(5, 0),
  },
}));

export const Heading2 = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      component="h2"
      variant="h3"
      align="center"
      className={classes.heading2Styles}
    >
      {children}
    </Typography>
  );
};
