import * as React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  linkStyles: {
    textDecoration: `none`,
  },
}));

export const StoneCard = ({ imgSrc, stone, description, linkUrl }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <Link href={linkUrl}>
          <a className={classes.linkStyles}>
            <CardMedia
              component="img"
              className={classes.media}
              image={imgSrc}
              title={stone}
              alt={stone}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {stone}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>{" "}
          </a>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link href={linkUrl}>
          <a className={classes.linkStyles}>
            <Button size="large" color="primary">
              Find out
            </Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};
