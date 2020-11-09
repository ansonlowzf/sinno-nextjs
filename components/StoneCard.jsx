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

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

export const StoneCard = ({ imgSrc, stone, description }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Find out
        </Button>
      </CardActions>
    </Card>
  );
};
