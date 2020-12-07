import * as React from "react";
import { NextSeo } from "next-seo";
import {
  Heading1,
  Heading2,
  SectionWrapper,
  TextWrapper,
} from "../../elements";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  listHeight: {
    "& > li": {
      marginBottom: theme.spacing(1),
    },
  },
}));

const QuartzStoneWarranty = () => {
  <NextSeo title="Quartz Stone Warranty" />;

  const classes = useStyles();

  return (
    <>
      <SectionWrapper>
        <Heading1>Quartz Stone Warranty</Heading1>
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            All our quartz stone products are genuine, it comes with at least 10
            years limited warranty.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Terms &amp; Conditions</Heading2>
        <Grid container justify="center">
          <Grid item>
            <TextWrapper>
              <Typography component="ol" className={classes.listHeight}>
                <li>
                  Client is advisable to follow the care &amp; maintenance
                  guide.
                  <Link href="/quartz-stone/care-and-maintenance">
                    <a className="link-style">{` `}Please read here.</a>
                  </Link>
                </li>
                <li>
                  All quartz stone countertops installed by Stone Innovations
                  Enterprise are entitled to this warranty automatically.
                </li>
                <li>
                  Client is required to provide site address or invoice number
                  of Stone Innovations Enterprise for the warranty claim
                </li>
                <li>
                  Client is required to cooperate with ours service team to
                  inspect and assist us in efforts to perform our obligations
                  under the warranty
                </li>
              </Typography>
            </TextWrapper>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>The Warranty Covers:-</Heading2>
        <Grid container justify="center">
          <Grid item>
            <TextWrapper>
              <Typography component="ol" className={classes.listHeight}>
                <li>Colour dimming</li>
                <li>Discolouration without any factors</li>
                <li>Scratches without any impacts</li>
                <li>Crack without any impacts</li>
              </Typography>
            </TextWrapper>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>How the Warranty Works?</Heading2>
        <Grid container justify="center">
          <Grid item>
            <TextWrapper>
              <Typography component="ol" className={classes.listHeight}>
                <li>Inspect by service team, identity the problem</li>
                <li>Repair</li>
                <li>
                  Replace - We will redo a new set FOC if repair cannot fix
                </li>
              </Typography>
            </TextWrapper>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Warranty excluded:-</Heading2>
        <Grid container justify="center">
          <Grid item>
            <TextWrapper>
              <Typography component="ol" className={classes.listHeight}>
                <li>{`Product' is used for outdoor purposes`}</li>
                <li>{`Product' is contacted with UV light`}</li>
                <li>{`Product' is used for flooring applications`}</li>
                <li>{`Product' is used exceeded heat level (150 degree)`}</li>
                <li>{`Product’ is exposure to weather condition`}</li>
                <li>{`Improper care and maintenance`}</li>
                <li>{`Improper purpose uses of product`}</li>
                <li>{`Damaged by applying any form of chemical foam & liquor on product`}</li>
                <li>{`Cutting and chopping directly on surface`}</li>
                <li>{`Uses of sharp items directly on surface`}</li>
                <li>{`Does not cover seam performance, adhesives and caulks that caused by movement of substrate, cabinets, flooring foundation, and thermal shock`}</li>
                <li>{`Damages caused by the installation of plumbing fixture`}</li>
                <li>{`Damages caused by installation of sink`}</li>
                <li>{`Damages caused by renovation works`}</li>
                <li>{`Altering works on product by any third parties`}</li>
                <li>{`Does not cover natural colour variation`}</li>
                <li>{`Does not cover the distribution of pattern`}</li>
                <li>{`Does not cover move of original installed location to new location`}</li>
                <li>{`Does not cover install of product on unoccupied structures`}</li>
                <li>{`Does not cover product and/or service that have not been paid in full`}</li>
                <li>{`Warranty will be void if product used to be serviced or maintained by any third party`}</li>
                <li>{`Warranty will be void if product is moved from the original location`}</li>
                <li>{`This warranty is not transferable from the original owner of the structure to new owner if owner sell/transfer the ownership of the structure`}</li>
              </Typography>
            </TextWrapper>
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default QuartzStoneWarranty;
