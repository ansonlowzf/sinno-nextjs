import { Container, makeStyles, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { Heading2, SectionWrapper, TextWrapper } from "../../../elements";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: 500,
  },
  imgMT: {
    marginTop: theme.spacing(5),
  },
  iframeMatchParentWidth: {
    position: `relative`,
    width: `100%`,
    height: 300,
    marginBottom: theme.spacing(2),
  },
}));

const Finishes = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Caesarstone Finish | Stone Innovations Enterprise" />
      <SectionWrapper>
        <Heading2>Finishes</Heading2>
        <TextWrapper>
          <Typography>
            Caesarstone offers a variety of five textured finishes to bring out
            the beauty and unique qualities of each surface design. Each finish
            has different sensorial and visual features that appeal to a wide
            variety of design styles. From the luxurious, high gloss look of our
            Polished Finish surfaces to the robust, rugged look and feel of our
            Rough Concrete Finish surfaces, you are sure to find the perfect
            countertop for you.
          </Typography>
        </TextWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="sm">
          <iframe
            title="test quartz stone scratch resistant"
            className={classes.iframeMatchParentWidth}
            src="https://www.youtube.com/embed/EvHfIs0K0ZY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            color="primary"
            align="center"
            gutterBottom
            className={classes.boldText}
          >
            Natural
          </Typography>
          <Grid container item justify="center">
            <Image src="/finish/natural.jpg" width={800} height={450} />
          </Grid>
          <TextWrapper>
            <Typography align="justify" className={classes.imgMT}>
              This slightly textured finish conjures up the emotional caress of
              stone; adding warmth to the grain so it’s pleasing to the touch. A
              satin sheen that gently reflects light – captivating the viewer
              and enhancing the depth of a color, especially on darker shades.
              Our new Natural Finish combines the appeal of texture one can
              actually feel – with the practicality of the minimal care and
              maintenance synonymous with all Caesarstone products.
            </Typography>
          </TextWrapper>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
            className={classes.boldText}
          >
            Polished
          </Typography>
          <Grid container item justify="center">
            <Image src="/finish/polish.jpg" width={800} height={450} />
          </Grid>
          <TextWrapper>
            <Typography className={classes.imgMT}>
              An elegant and highly reflective surface that is smooth to the
              touch. Caesarstone’s Polished finish emphasizes color and sets the
              tone for sophisticated spaces with its stunning luster. The sleek
              surface helps a room appear more spacious, adds luxury to
              interiors, and boasts remarkable style and endurance. Our standard
              finish is designed for life, requiring minimal care and
              maintenance.
            </Typography>
          </TextWrapper>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
            className={classes.boldText}
          >
            Matt (Honed)
          </Typography>
          <Grid container item justify="center">
            <Image src="/finish/matt.jpg" width={800} height={450} />
          </Grid>
          <TextWrapper>
            <Typography className={classes.imgMT}>
              A satiny finish with low sheen and a natural, less formal
              aesthetic. Caesarstone’s Honed finish exudes an organic appearance
              with its low light reflection, while retaining a stylish,
              authentic quality with high design appeal. Smooth to the touch,
              yet soft on the eye, our Honed finish is in perfect harmony with
              both classic and modern design approaches.
            </Typography>
          </TextWrapper>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
            className={classes.boldText}
          >
            Concrete
          </Typography>
          <Grid container item justify="center">
            <Image src="/finish/concrete.jpg" width={800} height={450} />
          </Grid>
          <TextWrapper>
            <Typography className={classes.imgMT}>
              A lightly textured concrete complexion that adds a sensorial
              dimension to any space. Caesarstone’s Concrete finish has a soft
              earthiness with low light reflection, similar to Honed but with a
              tactile effect. The surface evokes a natural feel that brings
              balance to a room, while delivering a classic industrial presence.
            </Typography>
          </TextWrapper>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
            className={classes.boldText}
          >
            Rough
          </Typography>
          <Grid container item justify="center">
            <Image src="/finish/rough.jpg" width={800} height={450} />
          </Grid>
          <TextWrapper>
            <Typography className={classes.imgMT}>
              This rich, complex, technologically advanced surface offers a
              compelling tactile effect, while still retaining a smooth profile
              that is inviting to touch. Caesarstone’s Rough finish has a
              distinctive, coarser look with low light reflection, inspiring a
              modern industrial vibe. Our Rough finish is designed to reflect
              the authentic patinas of industrial materials, the variations in
              appearance capture real depth and movement, revealing different
              qualities that make each slab distinct. Applications featuring
              multiple slabs will experience inherent visual differences.
            </Typography>
          </TextWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Finishes;
