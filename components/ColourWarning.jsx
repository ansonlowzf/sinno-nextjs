import * as React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(8),
  },
}));

export const ColourWarning = () => {
  const classes = useStyle();

  return (
    <>
      <Container maxWidth="xs" className={classes.sectionMargin}>
        <Typography component="p" variant="h6" paragraph color="error">
          Important
        </Typography>
        <Typography component="p" variant="subtitle2" paragraph color="error">
          {`Please note that the colour samples shown on the website are in digital format. Due to the variable of monitor screen and specs. The digital colour might differ from the actual colour. Please insist to see the actual colour before making your final decision.`}
        </Typography>
        <Typography component="p" variant="subtitle2" color="error">
          {`Quartz stone consists of natural quartz stone and therefore are subject to variation in shade, veining and colours, thus not absolute resemblance and no consistency can be guaranteed.`}
        </Typography>
      </Container>
    </>
  );
};
