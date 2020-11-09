import * as React from "react";
import { Typography } from "@material-ui/core";

export const MaterialArticle = () => {
  return (
    <Typography>
      You could read the{" "}
      <a href="/posts/material-pros-cons" className="link-style">
        material pros and cons short article
      </a>{" "}
      or{" "}
      <a href="/posts/material-rating" className="link-style">
        material rating chart
      </a>{" "}
      as a reference to choose the material for your kitchen top.
    </Typography>
  );
};
