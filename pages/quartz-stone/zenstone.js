import { Container, Grid, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Image from "next/image";
import {
  ColourWarning,
  Hero,
  MaterialArticle,
  PriceTerm,
  ProductDisplay,
  QuotationCTA,
  SlabDisplay,
  SubNavBar,
} from "../../components";
import { qsRoutes } from "../../constants/route";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";

const ZenstoneMalaysia = () => {
  return (
    <>
      <NextSeo title="Zenstone | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/calacatta_black.jpg"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Supply &amp; Install Zenstone Quartz Surface Kitchen Top"
      />

      <SubNavBar routes={qsRoutes} />

      <SectionWrapper>
        <Grid container justify="center">
          <Grid item xs={10} md={2}>
            <Image src="/zenstone_logo.png" width={800} height={600} />
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <TextWrapper>
          <Typography paragraph>{`
        A Malaysia's quartz stone's developed by Aston Builder in the year 2013 and was acquired by Stone Innovations Enterprise in the first quarter of the year 2017.
        `}</Typography>
          <Typography
            paragraph
          >{`Genuine quartz stone direct import from China which meet international SGS standard. Real quartz stone which comes with ten years limited warranty. More than 60 colours option.
        `}</Typography>
          <MaterialArticle />
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2 path="zenstone">Colour &amp; Pricing</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <ProductDisplay
              imgSrc="/zenstone/Q101521.JPEG"
              stoneName="White Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101523.jpg"
              stoneName="Snow White"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101503.jpg"
              stoneName="Smoothie White"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101522.JPEG"
              stoneName="Black Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101508.JPEG"
              stoneName="Smoothie Beige"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q3015.jpg"
              stoneName="Shell King"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101509.jpg"
              stoneName="Red Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101506.JPEG"
              stoneName="Smoothie Grey"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101525.jpg"
              stoneName="Beige Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101511.jpg"
              stoneName="Blue Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101510.jpg"
              stoneName="Brown Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101524.JPEG"
              stoneName="Grey Mirror"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101526.JPEG"
              stoneName="Crystal White"
              price="RM 220 /FR or RM 120 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q101528.JPEG"
              stoneName="Icy White"
              price="RM 220 /FR or RM 120 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601504.jpg"
              stoneName="Cameo"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q601509.jpg"
              stoneName="Golden Coffee"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601501.jpg"
              stoneName="Blue Sapphire"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q201506.jpg"
              stoneName="Grey Forest"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q202032.jpg"
              stoneName="Pure Grey"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q401501.jpg"
              stoneName="Black Ruby"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601503.jpg"
              stoneName="White Gold"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q601502.JPEG"
              stoneName="Beige Gold"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601507.JPEG"
              stoneName="Beige Gold Medium"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q601505.jpg"
              stoneName="Black Gold"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q4015.jpg"
              stoneName="Purple Galaxy"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q201504.jpg"
              stoneName="Pure White"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q201501.jpg"
              stoneName="Brown Cream"
              price="RM 250 /FR or RM 135 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q201505.jpg"
              stoneName="Pure Black"
              price="RM 250 /FR or RM 135 /SF"
            />

            <ProductDisplay
              imgSrc="/zenstone/Q802008.jpg"
              stoneName="Grey Land"
              price="RM 280 /FR or RM 150 /SF"
            />
            <ProductDisplay
              imgSrc="/zenstone/Q201541.jpg"
              stoneName="Super White"
              price="RM 280 /FR or RM 150 /SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <SlabDisplay
              imgSrc="/zenstone/Q801501slab.jpg"
              stoneName="Cararra White"
              price="RM 310 /FR or RM 165 /SF"
            />
            <SlabDisplay
              imgSrc="/zenstone/Q801534.jpg"
              stoneName="Black Ice Bloom"
              price="RM 310 /FR or RM 165 /SF"
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802021.jpg"
              stoneName="Snow Flower"
              price="RM 310 /FR or RM 165 /SF"
            />
            <SlabDisplay
              imgSrc="/zenstone/Q802022.jpg"
              stoneName="Calacatta Black"
              price="RM 310 /FR or RM 165 /SF"
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802023.jpg"
              stoneName="Arabescato Corchia"
              price="RM 310 /FR or RM 165 /SF"
            />
            <SlabDisplay
              imgSrc="/zenstone/Q802025.jpeg"
              stoneName="Black Marquina"
              price="RM 310 /FR or RM 165 /SF"
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802026.jpg"
              stoneName="Fabricator White"
              price="RM 310 /FR or RM 165 /SF"
            />
            <SlabDisplay
              imgSrc="/zenstone/Q802027.jpg"
              stoneName="Staturio White"
              price="RM 310 /FR or RM 165 /SF"
            />
            <SlabDisplay
              imgSrc="/zenstone/Q802031-slab.jpg"
              stoneName="Calacatta Venato"
              price="RM 310 /FR or RM 165 /SF"
            />
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <ColourWarning />
      </SectionWrapper>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Quartz" />
      </SectionWrapper>
    </>
  );
};

export default ZenstoneMalaysia;
