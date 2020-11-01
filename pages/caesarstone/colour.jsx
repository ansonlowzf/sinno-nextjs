import * as React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { SectionWrapper } from "../../elements";
import Image from "next/image";
import { PriceTerm } from "../../components";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  textP: {
    padding: theme.spacing(1),
  },
}));

const CaesarstoneColour = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs1141.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                1141 Pure White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 500/FR or RM 260/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs2141.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                2141 Snow
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs3100.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                3100 Jet Black
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs3101.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                3101 Piatto Black
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4001.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4001 Fresh Concrete
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4011.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4011 Cloudburst Concrete
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4023.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4023 Topus Concrete
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4030.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4030 Oyster
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4033.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4033 Rugged Concrete
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4044.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4044 Airy Concrete
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4120.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4120 Raven
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4130.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4130 Clamshell
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4220.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4220 Buttermilk
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4230.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4230 Shitake
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4330.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4330 Ginger
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4350.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4350 Mink
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 400/FR or RM 210/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4600.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4600 Organic White
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4601.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4601 Frozen Terra
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 410/FR or RM 215/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs4735.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                4735 Oxidian
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 1100/FR or RM 560/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5003.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5003 Piatra Grey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 1100/FR or RM 560/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5031.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5031 Statuario Maximus
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 1100/FR or RM 560/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5100.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5100 Vanilla Noir
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5101.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5101 Empira Black
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 1100/FR or RM 560/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5131.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5131 Calacatta Nuvo
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 1100/FR or RM 560/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5133.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5133 Symphony Grey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5141.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5141 Frosty Carrina
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5143.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5143 White Attica
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs5810.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                5810 Black Tempal
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs6046.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                6046 Moorland Fog
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs6131.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                6131 Bianco Drift
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 500/FR or RM 260/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs6313.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                6313 Turbine Grey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 500/FR or RM 260/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ border: `1px solid grey` }}>
            <Image src="/classico-colour/cs6338.jpg" width={800} height={400} />
          </Paper>
          <Grid
            container
            item
            justify="space-between"
            style={{ marginTop: `0.5em` }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                6338 Woodlands
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="p" variant="subtitle2" align="center">
                RM 600/FR or RM 310/SF
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <SectionWrapper>
        <PriceTerm />
      </SectionWrapper>
    </Container>
  );
};

export default CaesarstoneColour;
