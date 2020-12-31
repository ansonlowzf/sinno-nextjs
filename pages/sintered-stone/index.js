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
      <NextSeo title="Sintered Stone" />

      <SectionWrapper>
        <Heading1>Sintered Stone</Heading1>
        <TextWrapper>
          <Typography component="h2" variant="h6" align="center">
            Also known as Porcelain Slab, Porcelain Surface, Compact Surface or
            Ultra-Compact Surface
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2 idPath="stones">{`Products & Brands`}</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/bergen_1.jpg"
                stone="Dekton Ultra-Compact Stone"
                description="Product of Spain"
                linkUrl="/sintered-stone/dekton"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <StoneCard
                imgSrc="/qp2013-1.jpg"
                stone="Moca Compact Stone"
                description="Local Brand OEM China Sintered Stone Product"
                linkUrl="/sintered-stone/mocastone"
              />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default SinteredStone;
