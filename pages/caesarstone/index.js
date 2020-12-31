import { Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import {
  BodyT1,
  CaesarstoneCommitment,
  FaqAccordion,
  Hero,
  MaterialArticle,
  QuotationCTA,
  SubNavBar,
} from "../../components";
import { faqCaesarstone } from "../../constants/faq";
import { qsRoutes } from "../../constants/route";
import {
  FaqWrapper,
  Heading2,
  SectionWrapper,
  TextWrapper,
} from "../../elements";

const CaesarstoneMalaysia = () => {
  return (
    <>
      <NextSeo title="Caesarstone Quartz Surfaces Malaysia" />
      <Hero
        imgSrc="/calacatta_nuvo.jpg"
        imgText="Caesarstone Calacatta Nuvo"
        title="Caesarstone Malaysia"
        subtitle="Supply &amp; Install Caesarstone Quartz Surface Kitchen Top"
      />

      <SubNavBar routes={qsRoutes} />

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
        <Heading2 idPath="colour">Should You Use Caesarstone?</Heading2>
        <TextWrapper>
          <MaterialArticle />
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <BodyT1
          title="Colour &amp; Pricing"
          description="For all 34 Caesarstone colours available in Malaysia."
          btnText="See Colour &amp; Price"
          imgSrc="/cloudburst1.jpg"
          linkUrl="/caesarstone/colour-pricing"
        />
      </SectionWrapper>

      {/* <SectionWrapper>
        <BodyT2
          title="Caesarstone Commitment"
          description="For all 34 Caesarstone colours available in Malaysia."
          btnText="See Colour &amp; Price"
          imgSrc="/cloudburst1.jpg"
          linkUrl="/caesarstone/colour-pricing"
        />
      </SectionWrapper> */}

      <SectionWrapper>
        <Heading2>Caesarstone Commitment</Heading2>
        <CaesarstoneCommitment />
      </SectionWrapper>

      <SectionWrapper>
        <QuotationCTA stone="Quartz" />
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Frequently Ask Questions</Heading2>
        <FaqWrapper>
          {faqCaesarstone.map(({ question, answer, id }) => (
            <FaqAccordion key={id} question={question} answer={answer} />
          ))}
        </FaqWrapper>
      </SectionWrapper>
    </>
  );
};

export default CaesarstoneMalaysia;
