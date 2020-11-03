import * as React from "react";
import { Typography } from "@material-ui/core";
import { Heading2, TextWrapper } from "../elements";

export const PriceTerm = () => {
  return (
    <>
      <Heading2>Price Terms</Heading2>
      <TextWrapper>
        <Typography component="ul">
          <li>Foot Run (FR) is for total depth equal or less than 700mm.</li>
          <li>
            Square Feet (SF) is for total depth equal or greater than 700mm
            (e.g: Island with 900mm depth).
          </li>
        </Typography>
        <Typography component="p" variant="h6">
          {`The Price Include: -`}
        </Typography>
        <Typography component="ul">
          <li>
            Standard depth 600mm, 50mm front edging with mitre joint &amp; 50mm
            backsplash with flat polish.
          </li>
          <li>Material, Fabrication, Installation &amp; Transport.</li>
          <li>All Hole Opening are excluded.</li>
          <li>
            Price does not include dismantle of existing kitchen top if applied.
          </li>
        </Typography>
        <Typography component="p" variant="h6">
          {`Terms and Conditions: -`}
        </Typography>
        <Typography component="ul">
          <li>Final quotation price is based on on-site measurement.</li>
          <li>
            Goods will be delivered and installed within 14 days or earlier.
          </li>
          <li>
            Subject to stock availability or installation leads might take
            longer.
          </li>
          <li>
            Minimum order 10 FR or 20 SQ.FT per order or a surcharge will be
            applied.
          </li>
          <li>
            Payment terms: 40% deposit before fabrication, 40% before
            installation, &amp; 20% after installation.
          </li>
          <li>
            Additional workmanship, travel cost, accommodation will be applied
            for outstation works."
          </li>
          <li>
            Price does not apply to wall cladding, &amp; Flooring applications.
          </li>
          <li>Price is for Malaysia only.</li>
        </Typography>
      </TextWrapper>
    </>
  );
};
