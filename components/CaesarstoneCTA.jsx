import { makeStyles, Container, Typography } from "@material-ui/core";
import { SinnoButton } from "../components";

const useStyles = makeStyles((theme) => ({
  MB: {
    marginBottom: theme.spacing(10),
  },
  headerStyle: {
    textDecoration: "bold",
  },
}));

export const CaesarstoneCTA = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.MB}>
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        align="center"
        paragraph
        className={classes.headerStyle}
      >
        {`Custom Made Your Caesarstone Kitchen Top Today!`}
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
        className={classes.MB}
      >
        {`Get an estimate quotation for free!`}
      </Typography>
      <SinnoButton
        linkUrl="/quartz-stone/caesarstone/contact-us"
        btnText={`CONTACT US`}
      />
    </Container>
  );
};
