import * as React from "react";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { CaesarstoneColour, ColourWarning, PriceTerm } from "../../components";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textMB: {
    marginBottom: theme.spacing(5),
  },
}));

const ColourPricing = () => {
  const classes = useStyles();

  return (
    <>
      <SectionWrapper>
        <Heading2>Caesarstone Colour &amp; Pricing</Heading2>
        <TextWrapper>
          <Typography
            component="p"
            variant="h6"
            align="center"
            gutterBottom
            className={classes.textMB}
          >
            The price shown below is for all the 34 Caesarstone colours
            available in Malaysia in 20mm thick. 13mm is also available for a
            10% lower price.
          </Typography>
        </TextWrapper>
        <CaesarstoneColour />
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>
    </>
  );
};

export default ColourPricing;
