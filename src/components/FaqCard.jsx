import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export const FaqCard = ({ question, answer }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography className={classes.heading}>{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{answer}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
