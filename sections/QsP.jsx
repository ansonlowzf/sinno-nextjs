import { Typography } from "@material-ui/core";
import * as React from "react";
import { Heading2, TextWrapper } from "../elements";

const QsP = () => {
  return (
    <>
      <Heading2>Genunie Quartz Stone Only</Heading2>
      <TextWrapper>
        <Typography paragraph>
          Since the year 2018, Malaysia's quartz stone market started to chaos.
          The market is bloated with low-end quartz stone or sells compressed
          marble to sell as quartz stone. The seller told the buyer that
          compressed marble is a marble effect quartz stone, but the price is
          significantly lower.{" "}
        </Typography>
        <Typography paragraph>
          Some buyers sabotaged us and said we make big money by selling quartz
          stone at a higher price. Seeing the iceberg floating on the sea
          without seeing how big is the iceberg's base under the sea is
          superficial.{" "}
        </Typography>
        <Typography paragraph>May you ask:-</Typography>
        <Typography component="ol" paragraph>
          <li>The grade and quality of quartz stone?</li>
          <li>Is the installer a foreign worker or a local master?</li>
          <li>Machine or hand tool cutting?</li>
          <li>Could we installation punctually and fit your schedule?</li>
          <li>Products with a warranty?</li>
          <li>
            Is there any sales rep with the knowledge to answer all quartz stone
            question?
          </li>
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          Who made the most money?
        </Typography>
        <Typography component="ol" paragraph>
          <li>Genuine quartz stone sells at a genuine price.</li>
          <li>
            Low-end quartz stone or compressed marble sell at a genuine quartz
            stone price?
          </li>
        </Typography>
        <Typography paragraph>
          Who is not thinking of the massive hassles that can bring to the house
          owner, especially the owner who has moved into the house?
        </Typography>
        <Typography paragraph>
          Recently, the problems start exposed on the surface. Owners send us
          these photos and ask for help to polish or repair them. Said their
          seller blocked their phone or disappeared.
        </Typography>
      </TextWrapper>
    </>
  );
};

export default QsP;
