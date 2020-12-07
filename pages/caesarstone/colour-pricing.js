import * as React from "react";
import { Heading1, SectionWrapper, TextWrapper } from "../../elements";
import { CaesarstoneColour, ColourWarning, PriceTerm } from "../../components";
import { makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  textMB: {
    marginBottom: theme.spacing(10),
  },
  linkStyles: {},
}));

const ColourPricing = () => {
  const classes = useStyles();

  return (
    <>
      <SectionWrapper>
        <Heading1>Caesarstone Colour &amp; Pricing</Heading1>
        <TextWrapper>
          <Typography align="center" paragraph>
            The price shown below is for all the 34 Caesarstone colours
            available in Malaysia in 20mm thick. 13mm is also available for a
            10% lower price.
          </Typography>
          <Typography align="center" className={classes.textMB}>
            What are the different between the 5 type of Caesarstone's finishes?
            Polished, Natural, Matt, Concrete and Rough. Visit{` `}
            <Link href="/caesarstone/finishes">
              <a className="link-style">Caesarstone Finishes</a>
            </Link>
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
