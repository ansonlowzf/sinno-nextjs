import * as React from "react";
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Heading2 } from "../elements";
import { SinnoButton } from "../components";
import Image from "next/image";
import Link from "next/link";

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
          <SinnoButton btnText={btnText} linkUrl={linkUrl} />
        </Grid>
        <Grid container item xs={12} md={6} alignItems="center">
          <Paper component={Image} src={imgSrc} width={800} height={450} />
        </Grid>
      </Grid>
    </Container>
  );
};
