import { Card, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import OptionChart from "./OIChange";
import MinimumDistanceSlider from "./Slider";
import Timebuttons from "./Timebuttons";
import ChartFooter from "./ChartFooter";
import OICHange from "./OIChange";

const BarChart = () => {
  return (
    <Card sx={{ padding: "10px" }}>
      <MKBox style={{ padding: "5px" }}>
        <Typography variant="h5">OI Change - Aug & Sep Expiries</Typography>
      </MKBox>
      <hr />
      <OICHange />
      <hr />
      <Timebuttons />
      <ChartFooter />
    </Card>
  );
};

export default BarChart;
