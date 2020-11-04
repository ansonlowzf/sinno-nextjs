import * as React from "react";
import Image from "next/image";
import { Paper } from "@material-ui/core";

export const Hero = () => {
  return (
    <Paper style={{ height: `90vh` }}>
      <Image src="/factory-entrance.jpg" width={2000} height={1280} />
    </Paper>
  );
};
