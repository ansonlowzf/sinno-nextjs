import * as React from "react";
import { Box } from "@material-ui/core";

export const SectionWrapper = ({ children }) => {
  return <Box mb={{ xs: 5, sm: 8, md: 13 }}>{children}</Box>;
};
