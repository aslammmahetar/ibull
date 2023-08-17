import { AppBar, Box, Card, Paper, Toolbar, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import OptionChart from "./OptionChart";
import MinimumDistanceSlider from "./Slider";
import Timebuttons from "./Timebuttons";
import ChartFooter from "./ChartFooter";

const ChartsSection = () => {
  return (
    <Card sx={{ padding: "10px", marginTop: "25px" }}>
      <MKBox style={{ padding: "5px" }}>
        <Typography variant="h5">OI Change - Aug & Sep Expiries</Typography>
      </MKBox>
      <hr />
      <OptionChart />
      <hr />
      <MinimumDistanceSlider />
      <Timebuttons />
      <ChartFooter />
    </Card>
  );
};

export default ChartsSection;
