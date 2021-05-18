import { Container, Grid, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Image from "next/image";
import {
  ColourWarning,
  Hero,
  MaterialArticle,
  PriceTerm,
  QuotationCTA,
  SlabDisplay,
  SubNavBar,
  ZenstoneDisplay,
} from "../../components";
import { qsRoutes } from "../../constants/route";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { zenstone } from "../../constants";

const { classic, premium, noble, marble } = zenstone;

const ZenstoneMalaysia = () => {
  return (
    <>
      <NextSeo
        title="Zenstone | Stone Innovations Enterprise"
        description="Supply &amp; Install Zenstone Quartz Surface for All Kinds Of Countertops Application."
      />
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
        <Heading2>Colour &amp; Pricing</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center">
            <ZenstoneDisplay
              imgSrc="/qs/Q101503.png"
              stoneName="Smoothie White"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101506.png"
              stoneName="Smoothie Grey"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101508.png"
              stoneName="Smoothie Beige"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101509.png"
              stoneName="Red Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101510.png"
              stoneName="Brown Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101511.png"
              stoneName="Blue Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101512.png"
              stoneName="Purple Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101513.png"
              stoneName="Orange Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101521.png"
              stoneName="White Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101522.png"
              stoneName="Black Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101523.png"
              stoneName="Snow White"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101524.png"
              stoneName="Grey Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101525.png"
              stoneName="Beige Mirror"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101526.png"
              stoneName="Crystal White"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101527.png"
              stoneName="White Planet"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q101528.png"
              stoneName="Icy White"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q3015.png"
              stoneName="Shell King"
              price={classic}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201501.png"
              stoneName="Brown Cream"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201502.png"
              stoneName="Yellow Hill"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201503.png"
              stoneName="England Coffee"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201505.png"
              stoneName="Pure Black"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201506.png"
              stoneName="Grey Forest"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q202032.png"
              stoneName="Pure Grey"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q4015.png"
              stoneName="Purple Galaxy"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601501.png"
              stoneName="Blue Sapphire"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601502.png"
              stoneName="Beige Gold"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601503.png"
              stoneName="White Gold"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601504.png"
              stoneName="Cameo"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601505.png"
              stoneName="Black Gold"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601506.png"
              stoneName="White Gold Sand"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601507.png"
              stoneName="Beige Gold Medium"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601508.png"
              stoneName="Coffee Gold Sand"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q601509.png"
              stoneName="Golden Coffee"
              price={premium}
            />

            <ZenstoneDisplay
              imgSrc="/qs/Q201541.png"
              stoneName="Super White"
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
