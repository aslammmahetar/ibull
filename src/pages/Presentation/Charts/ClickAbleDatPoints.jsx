import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ClickableDataPointsChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Stock Market Data",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
    series: [
      {
        name: "Stock Price",
        data: [
          [Date.UTC(2023, 0, 1), 100],
          [Date.UTC(2023, 0, 2), 105],
          [Date.UTC(2023, 0, 3), 110],
          // Add more data points here...
        ],
      },
      {
        name: "Another Line",
        data: [
          [Date.UTC(2023, 0, 1), 80],
          [Date.UTC(2023, 0, 2), 85],
          [Date.UTC(2023, 0, 3), 90],
          // Add more data points here...
        ],
      },
    ],
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "year",
          count: 1,
          text: "1Y",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 3, // Index of the initially selected button (All in this case)
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
    </div>
  );
};

export default ClickableDataPointsChart;
