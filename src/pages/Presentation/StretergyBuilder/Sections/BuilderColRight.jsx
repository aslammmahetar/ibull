import { Box, Stack } from "@mui/material";
import React from "react";
import InstrumentInfo from "./InstrumentInfo";
import EmptyChartBox from "./EmptyChartBox";

const BuilderColRight = () => {
  return (
    <Stack
      width={"56%"}
      spacing={1}
      // border={"solid black 1px "}
    >
      <InstrumentInfo />
      <EmptyChartBox />
    </Stack>
  );
};

export default BuilderColRight;
