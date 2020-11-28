import * as React from "react";
import { Heading2, SectionWrapper } from "../../elements";
import { CaesarstoneColour, ColourWarning, PriceTerm } from "../../components";

const ColourPricing = () => {
  return (
    <>
      <SectionWrapper>
        <Heading2>Caesarstone Colour &amp; Pricing</Heading2>
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
