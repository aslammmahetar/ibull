import { Bar } from "react-chartjs-2";
import React from "react";
import MinimumDistanceSlider from "./Slider";
import Timebuttons from "./Timebuttons";
import ChartFooter from "./ChartFooter";
import { Card, Typography } from "@mui/material";
import MKBox from "components/MKBox";

const LineBarCombinedChart = () => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    barData: [10, 20, 15, 25, 30],
    lineData: [5, 15, 10, 20, 25],
  };
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Bar Data",
        data: data.barData,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        type: "bar",
      },
      {
        label: "Line Data",
        data: data.lineData,
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        fill: false,
        type: "line",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Card sx={{ padding: "10px", marginTop: "25px" }}>
        <MKBox style={{ padding: "5px" }}>
          <Typography variant="h5">OI Change - Aug & Sep Expiries</Typography>
        </MKBox>
        <hr />
        <Bar data={chartData} options={options} />
        <hr />
        <MinimumDistanceSlider />
        <Timebuttons />
        <ChartFooter />
      </Card>
    </div>
  );
};

export default LineBarCombinedChart;
