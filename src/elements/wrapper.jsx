import { Box } from "@material-ui/core";

export const SectionWrapper = ({ children }) => {
  return <Box mb={{ xs: 0, sm: 8, md: 13 }}>{children}</Box>;
};
