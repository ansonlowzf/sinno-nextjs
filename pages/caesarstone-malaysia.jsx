import * as React from "react";
import { NextSeo } from "next-seo";
import { SectionWrapper, TextWrapper, Heading2 } from "../elements";
import { Typography } from "@material-ui/core";

const CaesarstoneMalaysia = () => {
  return (
    <>
      <NextSeo title="Caesarstone Malaysia" />
      <SectionWrapper>
        <Heading2>Caesarstone Quartz Surface</Heading2>
        <TextWrapper>
          <Typography paragraph>
            {`Caesarstone is one of the highest quality quartz stone you could find in
            the market right now.`}
          </Typography>
          <Typography paragraph>
            {`It's designed to mimic the colour of natural stone yet maintain the benefit of quartz stone and provide natural and premium feeling to your home design.`}
          </Typography>
          <Typography paragraph>
            {`Imagine you have a beautiful kitchen top which no need to worry about scratches, heat burnt mark, and so easy to maintain. Cooking feels so free now.`}
          </Typography>
          <Typography>
            {`Caesarstone Malaysia's distributor import Caesarstone from Caesarstone South East Asia's branch in Singapore to Malaysia, then fabricate, supply and install for Malaysia's homeowner.`}
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Should You Use Caesarstone?</Heading2>
        <TextWrapper>
          <Typography>
            You could read the{" "}
            <a href="./material-pros-cons" className="link-style">
              material pros and cons short article
            </a>{" "}
            or{" "}
            <a href="./material-rating" className="link-style">
              material rating chart
            </a>{" "}
            as a reference to choose the material for your kitchen top.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Caesarstone Colour</Heading2>
        <TextWrapper>
          <Typography component="p" variant="h6" align="center" gutterBottom>
            {`Caesarstone's price for all the 32 Caesarstone colours in Malaysia.`}
          </Typography>
        </TextWrapper>
      </SectionWrapper>
    </>
  );
};

export default CaesarstoneMalaysia;
