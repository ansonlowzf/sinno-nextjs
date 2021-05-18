import { makeStyles, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  CaesarstoneColour,
  CaesarstoneCommitment,
  CaesarstoneCTA,
  ColourWarning,
  FaqAccordion,
  Hero,
  MaterialArticle,
  PriceTerm,
  SubNavBar,
} from "../../../components";
import { faqCaesarstone } from "../../../constants/faq";
import { qsRoutes } from "../../../constants/route";
import {
  FaqWrapper,
  Heading2,
  SectionWrapper,
  TextWrapper,
} from "../../../elements";

const useStyles = makeStyles((theme) => ({
  textMB: {
    marginBottom: theme.spacing(10),
  },
}));

const CaesarstoneMalaysia = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo
        title="Caesarstone | Stone Innovations Enterprise"
        description="Supply &amp; Install Caesarstone Quartz Surface for All Kinds Of Countertops Application."
      />
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
            Caesarstone is one of the highest quality quartz stone you could
            find in the market right now.
          </Typography>
          <Typography paragraph>
            It's designed to mimic the colour of natural stone while maintaining
            the benefit of quartz stone and providing a natural and premium
            feeling to your home design.
          </Typography>
          <Typography paragraph>
            Imagine you have a beautiful kitchen top which no need to worry
            about scratches, heat burnt mark, and so easy to maintain. Cooking
            feels so accessible now.
          </Typography>
          <Typography>
            Stone Innovations Enterprise is Caesarstone Malaysia's distributor.
            We distribute Caesarstone slabs and fabricate, supply &amp; install
            Caesarstone products such as kitchen top, island top, vanity top and
            wall cladding.
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
        <Heading2>Colour &amp; Pricing</Heading2>
        <TextWrapper>
          <Typography align="center" paragraph>
            The price shown below is for all the 34 Caesarstone colours
            available in Malaysia in 20mm thick. 13mm is also available for a
            10% lower price.
          </Typography>
          <Typography align="center" className={classes.textMB}>
            What are the different between the 5 type of Caesarstone's finishes?
            Polished, Natural, Matt, Concrete and Rough. Visit{` `}
            <Link href="/quartz-stone/caesarstone/finishes">
              <a className="link-style">Caesarstone Finishes</a>
            </Link>
          </Typography>
        </TextWrapper>

        <CaesarstoneColour />

        <SectionWrapper>
          <ColourWarning />
        </SectionWrapper>

        <SectionWrapper>
          <PriceTerm />
        </SectionWrapper>

        <SectionWrapper>
          <CaesarstoneCTA />
        </SectionWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>Caesarstone Commitment</Heading2>
        <CaesarstoneCommitment />
      </SectionWrapper>

      <SectionWrapper>
        <CaesarstoneCTA />
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
