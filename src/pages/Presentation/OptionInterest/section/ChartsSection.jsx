import { Card, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import ChartFooter from "./ChartFooter";
import OIChangeChart from "pages/Presentation/Charts/OIChangeChart";

const BarChart = () => {
  return (
    <Card sx={{ padding: "10px" }}>
      <MKBox style={{ padding: "5px" }}>
        <Typography variant="h5">OI Change - Aug & Sep Expiries</Typography>
      </MKBox>
      <hr />
      <OIChangeChart />
      <hr />
      <ChartFooter />
    </Card>
  );
};

export default BarChart;
