import * as React from "react";
import { Typography } from "@material-ui/core";

export const PostBody = ({ content }) => {
  return (
    <Typography dangerouslySetInnerHTML={{ __html: content }}></Typography>
  );
};
