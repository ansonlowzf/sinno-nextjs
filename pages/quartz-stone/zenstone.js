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
import { zenstone } from "../../constants";

const { classic, premium, noble, marble } = zenstone;

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
              imgSrc="/zenstone/Q101503.jpg"
              stoneName="Smoothie White"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101506.JPEG"
              stoneName="Smoothie Grey"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101508.JPEG"
              stoneName="Smoothie Beige"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101509.jpg"
              stoneName="Red Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101510.jpg"
              stoneName="Brown Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101511.jpg"
              stoneName="Blue Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101521.JPEG"
              stoneName="White Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101522.JPEG"
              stoneName="Black Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101523.jpg"
              stoneName="Snow White"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101524.JPEG"
              stoneName="Grey Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101525.jpg"
              stoneName="Beige Mirror"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101526.JPEG"
              stoneName="Crystal White"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101527.jpg"
              stoneName="White Planet"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q101528.JPEG"
              stoneName="Icy White"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q3015.jpg"
              stoneName="Shell King"
              price={classic}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q201501.jpg"
              stoneName="Brown Cream"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q201505.jpg"
              stoneName="Pure Black"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q201506.jpg"
              stoneName="Grey Forest"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q202032.jpg"
              stoneName="Pure Grey"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q4015.jpg"
              stoneName="Purple Galaxy"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601501.jpg"
              stoneName="Blue Sapphire"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601502.JPEG"
              stoneName="Beige Gold"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601503.jpg"
              stoneName="White Gold"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601504.jpg"
              stoneName="Cameo"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601505.jpg"
              stoneName="Black Gold"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601506.jpg"
              stoneName="White Gold Sand"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601507.jpg"
              stoneName="Beige Gold Medium"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601508.jpg"
              stoneName="Coffee Gold Sand"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q601509.jpg"
              stoneName="Golden Coffee"
              price={premium}
            />

            <ProductDisplay
              imgSrc="/zenstone/Q201541.jpg"
              stoneName="Super White"
              price={noble}
            />
            <ProductDisplay
              imgSrc="/zenstone/Q802008.jpg"
              stoneName="Grey Land"
              price={noble}
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
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q801534.jpg"
              stoneName="Black Ice Bloom"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q801535.jpg"
              stoneName="Black Marquina S"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802021.jpg"
              stoneName="Snow Flower"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802023.jpg"
              stoneName="Arabescato Corchia"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802025.jpeg"
              stoneName="Black Marquina"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802026.jpg"
              stoneName="Fabricator White"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802027.jpg"
              stoneName="Staturio White"
              price={marble}
            />

            <SlabDisplay
              imgSrc="/zenstone/Q802031-slab.jpg"
              stoneName="Calacatta Venato"
              price={marble}
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
