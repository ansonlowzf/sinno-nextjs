import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import * as React from "react";
import { SinnoButton } from "../components";
import { Heading2 } from "../elements";

const useStyles = makeStyles((theme) => ({
  bodyStyles: {
    margin: theme.spacing(6, 0),
  },
  descriptionStyles: {
    maxWidth: theme.spacing(70),
    marginBottom: theme.spacing(10),
  },
  btnStyles: {
    padding: theme.spacing(2, 6),
  },
  linkStyles: {
    textDecoration: `none`,
  },
  pMb: {
    marginBottom: theme.spacing(10),
  },
}));

export const BodyT1 = ({ imgSrc, title, description, btnText, linkUrl }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          className={classes.bodyStyles}
        >
          <Heading2>{title}</Heading2>
          <Typography align="center" className={classes.descriptionStyles}>
            {description}
          </Typography>
        </Grid>
        <Grid container item xs={12} md={6} alignItems="center">
          <Paper component={Image} src={imgSrc} width={800} height={450} />
        </Grid>
      </Grid>
    </Container>
  );
};
