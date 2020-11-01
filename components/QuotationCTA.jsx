import * as React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MB: {
    marginBottom: theme.spacing(10),
  },
}));

export const QuotationCTA = ({ stone }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.MB}>
      <Typography variant="h4" component="h3" align="center" paragraph>
        {`Custom Made Your ${stone} Countertop Today`}
      </Typography>
      <Typography component="p" variant="h6" align="center">
        {`Get an estimate quotation for free`}
      </Typography>
    </Container>
  );
};
