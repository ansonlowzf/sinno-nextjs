import * as React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  btnStyles: {
    padding: theme.spacing(2, 3),
  },
  linkStyle: {
    textDecoration: `none`,
  },
}));

export const Back2CaesarstoneButton = ({ navToId }) => {
  const classes = useStyles();

  return (
    <Box align="center" mt={10}>
      <Link href={`/caesarstone#${navToId}`}>
        <a className={classes.linkStyle}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btnStyles}
          >
            &larr; Back To Caesarstone
          </Button>
        </a>
      </Link>
    </Box>
  );
};
// "/caesarstone#colour"
