import { Container, Grid } from "@material-ui/core";
import { BodyT1, Hero, StoneCard } from "../src/components";
import { Heading2 } from "../src/elements";
import { SectionWrapper } from "../src/elements/wrapper";

const Home = () => {
  return (
    <>
      <Hero
        image="/factory-entrance.jpg"
        imageText="factory entrance"
        title="Stone Kitchen Top Specialist"
        description="Specializing In Custom Made Stone Kitchen Top"
      />
      <SectionWrapper>
        <BodyT1 />
      </SectionWrapper>

      <SectionWrapper>
        <Heading2>This is a H2</Heading2>
        <Container maxWidth="lg">
          <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item sm={6} md={5}>
              <StoneCard />
            </Grid>
            <Grid item sm={6} md={5}>
              <StoneCard />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Home;
