import * as React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading2Styles: {
    margin: theme.spacing(6, 0),
  },
  textStyles: {
    fontWeight: 600,
  },
}));

export const Heading1 = ({ children, idPath }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      className={classes.heading2Styles}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="primary"
        id={idPath}
        className={classes.textStyles}
      >
        {children}
      </Typography>
    </Box>
  );
};

export const Heading2 = ({ children, idPath }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      className={classes.heading2Styles}
    >
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="primary"
        id={idPath}
        className={classes.textStyles}
      >
        {children}
      </Typography>
    </Box>
  );
};
