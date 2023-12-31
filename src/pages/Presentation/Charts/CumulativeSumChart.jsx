import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import "highcharts/css/highcharts.css";
import { Paper } from "@mui/material";

const CumulativeSumChart = () => {
  useEffect(() => {
    const chart = Highcharts.stockChart("container5", {
      title: {
        text: "Cumulative Sum",
        align: "left",
      },
      subtitle: {
        text: "Displays the sum of all the previous values and the current value (only within the visible range)",
        align: "left",
      },
      plotOptions: {
        series: {
          cumulative: true,
          pointStart: Date.UTC(2021, 0, 1),
          pointIntervalUnit: "day",
        },
      },
      rangeSelector: {
        enabled: false,
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.cumulativeSum})<br/>',
        changeDecimals: 2,
        valueDecimals: 2,
      },
      xAxis: {
        minRange: 3 * 24 * 36e5,
        max: Date.UTC(2021, 0, 6),
      },
      series: [
        {
          data: [1, 2, 5, 10, 20, 50, 100, -100, 100, -100],
        },
        {
          data: [100, -50, -15, 15, -50, -20, -30, 100, -100, 100],
        },
      ],
    });

    return () => {
      // Cleanup the chart when the component unmounts
      chart.destroy();
    };
  }, []);

  return (
    <Paper>
      <div id="container5" />
    </Paper>
  );
};

export default CumulativeSumChart;
