import * as React from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";

export const MaterialArticle = () => {
  return (
    <Typography>
      You could read the{" "}
      <Link href="/blog/material-pros-cons">
        <a className="link-style">material pros and cons short article</a>
      </Link>{" "}
      or{" "}
      <Link href="/blog/material-rating">
        <a className="link-style">material rating chart</a>
      </Link>
      as a reference to choose the material for your kitchen top.
    </Typography>
  );
};
