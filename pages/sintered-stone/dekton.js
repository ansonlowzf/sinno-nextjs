import { Container, Grid } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { Hero, ProductDisplay, SubNavBar } from "../../components";
import { Heading2, SectionWrapper, TextWrapper } from "../../elements";
import { ssRoutes } from "../../constants/route";

const DektonPage = () => {
  return (
    <>
      <NextSeo title="Dekton | Stone Innovations Enterprise" />
      <Hero
        imgSrc="/kelya_8.jpg"
        imgText="Dekton Kelya Kitchen Top"
        title="Dekton"
        subtitle="Supply &amp; Install Dekton Ultra-Compact Surface Kitchen Top"
      />

      <SubNavBar routes={ssRoutes} />

      <SectionWrapper>
        <TextWrapper>
          <Heading2>Colour &amp; Pricing</Heading2>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={3} justify="center">
            <ProductDisplay
              imgSrc="/dekton/aeris-0.jpg"
              stoneName="Aeris (Smooth Matt) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/arga-0.jpg"
              stoneName="Arga (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/aura15-0.jpg"
              stoneName="Aura 15 (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/baltic-0.jpg"
              stoneName="Baltic (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/bergen-0.jpg"
              stoneName="Bergen (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/blanc-concrete-0.jpg"
              stoneName="Blanc Concrete (Texture) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/danae-0.jpg"
              stoneName="Danae (Smooth Matt) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/domoos-0.jpg"
              stoneName="Domoos (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/edora-0.jpg"
              stoneName="Edora (Texture) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/entzo-0.jpg"
              stoneName="Entzo (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/eter-0.jpg"
              stoneName="Eter (Smooth Matt) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/feroe-0.jpg"
              stoneName="Feroe (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/fossil-0.jpg"
              stoneName="Fossil (Smooth Matt) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/halo-0.jpg"
              stoneName="Halo (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/helena-0.jpg"
              stoneName="Helena (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/kairos-0.jpg"
              stoneName="Kairos (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/kelya-0.jpg"
              stoneName="Kelya (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/keon-0.jpg"
              stoneName="Keon (Smooth Matt) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/keranium-0.jpg"
              stoneName="Kenanium (Smooth Matt) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/khalo-0.jpg"
              stoneName="Khalo (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/kira-0.jpg"
              stoneName="Kira (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/korso-0.jpg"
              stoneName="Korso (X-Gloss) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/kovik-0.jpg"
              stoneName="Kovik (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/kreta-0.jpg"
              stoneName="Kreta (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/laos-0.jpg"
              stoneName="Laos (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/laurent-0.jpg"
              stoneName="Laurent (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/liquid-embers-0.jpg"
              stoneName="Liquid Embers (Texture) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/liquid-shell-0.jpg"
              stoneName="Liquid Shell (Texture) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/liquid-sky-0.jpg"
              stoneName="Liquid Sky (Texture) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/lunar-0.jpg"
              stoneName="Lunar (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/natura18-0.jpg"
              stoneName="Natura 18 (X-Gloss) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/nayla-0.jpg"
              stoneName="Nayla (Smooth Matt) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/nilium-0.jpg"
              stoneName="Nilium (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/olimpo-0.jpg"
              stoneName="Olimpo (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/opera-0.jpg"
              stoneName="Opera (Velvet) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/orix-0.jpg"
              stoneName="Orix (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/radium-0.jpg"
              stoneName="Radium (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/rem-0.jpg"
              stoneName="Rem (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/sasea-0.jpg"
              stoneName="Sasea (Smooth Matt) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/sirius-0.jpg"
              stoneName="Sirius (Texture) 12mm"
              price="RM 400 /FR or RM 240 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/sirocco-0.jpg"
              stoneName="Sirocco (Smooth Matt) 12mm"
              price="RM 360 /FR or RM 210 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/sogne-0.jpg"
              stoneName="Sogne (X-Gloss) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/soke-0.jpg"
              stoneName="Soke (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/taga-0.jpg"
              stoneName="Taga (X-Gloss) 12mm"
              price="RM 590 /FR or RM 340 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/trilium-0.jpg"
              stoneName="Trilium (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/uyuni-0.jpg"
              stoneName="Uyuni (Smooth Matt) 12mm"
              price="RM 540 /FR or RM 300 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/vera-0.jpg"
              stoneName="Vera (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/vienna-0.jpg"
              stoneName="Vienna (X-Gloss) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
            <ProductDisplay
              imgSrc="/dekton/zenith-0.jpg"
              stoneName="Zenith (Smooth Matt) 12mm"
              price="RM 460 /FR or RM 270 /SF "
            />
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default DektonPage;
