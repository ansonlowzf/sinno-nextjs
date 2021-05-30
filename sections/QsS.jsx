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
        <Typography paragraph>
          Please watch these 3 videos in 3 minutes to see whether the genuine
          quartz stone is what you are looking for?
        </Typography>
        <iframe
          title="test quartz stone scratch resistance"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/L80IMvVu8j0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Container maxWidth="sm">
        <iframe
          title="test quartz stone stain resistance"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/NPdanaeRwWc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Container maxWidth="sm">
        <iframe
          title="test quartz stone heat resistance"
          className={classes.iframeMatchParentWidth}
          src="https://www.youtube.com/embed/sEk7n4oj5Ps"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </SectionWrapper>
  );
};

export default QsS;
