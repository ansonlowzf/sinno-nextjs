import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { StoneCard, ProductDisplay, QuotationCTA } from "../../components";
import {
  Heading2,
  Heading1,
  SectionWrapper,
  TextWrapper,
} from "../../elements";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(4),
  },

  h1MT: {
    marginTop: theme.spacing(10),
  },
}));

const SinteredStone = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Sintered Stone | Stone Innovations Enteprise" />

      <SectionWrapper>
        <Heading1>Sintered Stone</Heading1>
        <TextWrapper>
          <Typography component="p" variant="h6" align="center" gutterBottom>
            Also known as Porcelain Slab, Porcelain Surface, Compact Surface or
            Ultra-Compact Surface
          </Typography>
          <Typography align="center">
            All the name refer to the same stone - Sintered Stone.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2 idPath="stones">Stone Brands</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/bergen_1.jpg"
                stone="Dekton Ultra-Compact Stone"
                description="Product of Spain. All colours available in Malaysia. Subject to stock availability."
                linkUrl="/sintered-stone/dekton"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/qp2013-1.jpg"
                stone="Moca Compact Surface"
                description="Local Brand OEM China Sintered Stone. All colours available in Malaysia. Subject to stock availability."
                linkUrl="/sintered-stone/moca-compact-surface"
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* <SectionWrapper>
        <Heading2>Usages</Heading2>
      </SectionWrapper> */}
    </>
  );
};

export default SinteredStone;
