import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { amber, deepPurple } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
