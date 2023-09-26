import { Card, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import ChartFooter from "./ChartFooter";
import OIChangeChart from "pages/Presentation/Charts/OIChangeChart";
import { useSelector } from "react-redux";

const BarChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ogu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const currentMonthname = currentDate.getMonth();

  const currentMonth = useSelector((store) => store.realReducer.currentMonth);
  const nextMonth = useSelector((store) => store.realReducer.nextMonth);

  const displayMonth = () => {
    if (currentMonth && nextMonth) {
      return `${months[currentMonthname]} & ${
        !months[currentMonthname + 1] ? "Jan" : months[currentMonthname + 1]
      }`;
    }
    if (currentMonth && !nextMonth) {
      return `${!months[currentMonthname + 1] ? "Jan" : months[currentMonthname]}`;
    }
    if (!currentMonth && nextMonth) {
      return `${!months[currentMonthname + 1] ? "Jan" : months[currentMonthname + 1]}`;
    }
    return "Nothing";
  };

  return (
    <Card sx={{ padding: "10px" }}>
      <MKBox style={{ padding: "5px" }}>
        <Typography variant="h5">OI Change - {displayMonth()} Expiries</Typography>
      </MKBox>
      <hr />
      <OIChangeChart />
      <hr />
      <ChartFooter />
    </Card>
  );
};

export default BarChart;
