import * as React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import { SectionWrapper, TextWrapper } from "../elements";

const QsA = () => {
  return (
    <>
      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/burnt-by-oil.jpg"
                alt="quartz stone with oil burnt mark"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/chemical.jpg"
                alt="discolouration by chemical"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/chip-off.jpg"
                alt="quartz stone chip off"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/low-end-materials.jpg"
                alt="quartz stone with low end materials"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/scratches.jpg"
                alt="quartz stone with scratches"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/discolouration.jpg"
                alt="quartz stone chip off"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/stain.jpg"
                alt="quartz stone with stain"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                component={Image}
                src="/defectqs/stain2.jpg"
                alt="quartz stone with stain"
                layout="responsive"
                width={960}
                height={720}
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <TextWrapper>
          <Typography component="h3" variant="h6" gutterBottom>
            Could you recognize which is low-end quartz stone or compressed
            marble?
          </Typography>
          <Typography paragraph>
            Mr/Mrs owner, if one of these problems occurred, repair or polish
            could not solve your problem. The actual problem is the quartz stone
            itself.
          </Typography>
          <Typography paragraph>
            Just imagine, what if this happens to you? Close your eyes to let
            the situation keep getting serious? Or take the hassle and money to
            make a new set?
          </Typography>

          <Typography component="h3" variant="h6" gutterBottom>
            What is low-end quartz stone in short description?
          </Typography>
          <Typography paragraph>
            Supposedly the contain of the quartz stone's sand should be 90% and
            above per slab. Manufacturers reduce to 60% or lower, then replace
            it with glass sand, stone powder and other unknown materials.
            Significantly reduce the cost while can maintain the advantages of
            genuine quartz stone for a short time.{" "}
          </Typography>
          <Typography paragraph>
            To make it look polished and shiny. Some manufacturers apply a
            sealant on top of the surface. Again, to keep the cost low, the
            manufacturers used low-end sealant and created another problem.{" "}
          </Typography>
          <Typography paragraph>
            Really? Do you want to make a set of kitchen top with this quartz
            stone quality?
          </Typography>
          <Typography paragraph>
            Genuine quartz stone will not give you these kinds of issues. They
            come with the benefits as below:-
          </Typography>
        </TextWrapper>
      </SectionWrapper>
    </>
  );
};

export default QsA;
