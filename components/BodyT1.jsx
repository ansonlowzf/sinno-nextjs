import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import { Heading2 } from "../elements";
import { SinnoButton } from "../components";

const useStyles = makeStyles((theme) => ({
  bodyStyles: {
    margin: theme.spacing(6, 0),
  },
  descriptionStyles: {
    maxWidth: theme.spacing(70),
    marginBottom: theme.spacing(10),
  },
}));

export const BodyT1 = ({
  imgSrc,
  imgText,
  title,
  description,
  btnText,
  linkUrl,
}) => {
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
          <Image src={imgSrc} alt={imgText} width={800} height={450} />
        </Grid>
      </Grid>
    </Container>
  );
};
