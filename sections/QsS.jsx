import * as React from "react";
import { SectionWrapper, Heading2 } from "../elements";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textPB: {
    marginBottom: theme.spacing(5),
  },
  iframeMatchParentWidth: {
    position: `relative`,
    width: `100%`,
    height: 300,
    marginBottom: theme.spacing(2),
  },
}));

const QsS = () => {
  const classes = useStyles();

  return (
    <SectionWrapper>
      <Heading2>Why Use Genuine Quartz Stone?</Heading2>
      <Container maxWidth="sm">
        <Typography paragraph>These 3 videos:-</Typography>
        <iframe
          title="test quartz stone scratch resistant"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/jcJIQeojqPQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Container maxWidth="sm">
        <iframe
          title="test quartz stone stain resistant"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/i6N43EqJQpg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Container maxWidth="sm">
        <iframe
          title="test quartz stone heat resistant"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/CblsvAtVw9c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </SectionWrapper>
  );
};

export default QsS;
