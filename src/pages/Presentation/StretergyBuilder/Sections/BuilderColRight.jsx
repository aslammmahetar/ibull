import { Box } from "@mui/material";
import React from "react";
import InstrumentInfo from "./InstrumentInfo";
import EmptyChartBox from "./EmptyChartBox";
import { useSelector } from "react-redux";
import ChartAndDeatils from "./ChartAndDeatils";
import InstrumentOtherInfo from "./InstrumentOtherInfo";

const BuilderColRight = () => {
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);

  return (
    <Box
      width={{ xs: "100%", sm: "100%", md: "100%", lg: "56%" }}
    >
      <InstrumentInfo />
      {!stretergyCreated ? <EmptyChartBox /> : <ChartAndDeatils />}
      {stretergyCreated && <InstrumentOtherInfo />}
    </Box>
  );
};

export default BuilderColRight;
