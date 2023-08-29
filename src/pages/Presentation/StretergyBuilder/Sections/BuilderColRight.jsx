import { Box, Stack } from "@mui/material";
import React from "react";
import InstrumentInfo from "./InstrumentInfo";
import EmptyChartBox from "./EmptyChartBox";

const BuilderColRight = () => {
  return (
    <Box
      width={{ xs: "100%", sm: "100%", md: "100%", lg: "56%" }}
      // border={"solid black 1px "}
    >
      <InstrumentInfo />
      <EmptyChartBox />
    </Box>
  );
};

export default BuilderColRight;
