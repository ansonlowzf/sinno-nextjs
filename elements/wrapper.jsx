import * as React from "react";
import { Box, Container } from "@material-ui/core";

export const SectionWrapper = ({ children }) => {
  return <Box mb={{ xs: 5, sm: 8, md: 13 }}>{children}</Box>;
};

export const TextWrapper = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export const FaqWrapper = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};
