import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
    },
    title: {
      text: "Stock Price Chart",
    },
    rangeSelector: {
      selected: 0, // Default to 1 day view
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
        },
        {
          type: "all",
          text: "All",
        },
      ],
    },
    yAxis: [
      {
        title: {
          text: "Column Series",
        },
      },
      {
        title: {
          text: "Line Series",
        },
        opposite: true,
      },
    ],
    series: [
      {
        type: "column",
        name: "Column Series",
        data: [], // You can fetch and populate the data dynamically
      },
      {
        type: "line",
        name: "Line Series",
        yAxis: 1,
        data: [], // You can fetch and populate the data dynamically
      },
    ],
  });

  const [lineSeriesVisible, setLineSeriesVisible] = useState(true);

  useEffect(() => {
    // Fetch and update chart data based on selected time interval
    // For example, fetch 1-day data, 1-month data, etc. and update chartOptions.series[0].data and chartOptions.series[1].data

    // Simulate fetching data
    setTimeout(() => {
      const newColumnData = [
        // Sample column series data, replace with your actual data
        [1631174400000, 150],
        [1631260800000, 155],
        [1631347200000, 160],
        // Add more data points as needed
      ];

      const newLineData = [
        // Sample line series data, replace with your actual data
        [1631174400000, 10],
        [1631260800000, 12],
        [1631347200000, 15],
        // Add more data points as needed
      ];

      setChartOptions({
        ...chartOptions,
        series: [
          {
            ...chartOptions.series[0],
            data: newColumnData,
          },
          {
            ...chartOptions.series[1],
            data: lineSeriesVisible ? newLineData : [], // Show/hide line series based on lineSeriesVisible state
          },
        ],
      });
    }, 1000); // Simulate a delay for fetching data
  }, [chartOptions, lineSeriesVisible]);

  const toggleLineSeries = () => {
    setLineSeriesVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button onClick={toggleLineSeries}>
        {lineSeriesVisible ? "Hide Line Series" : "Show Line Series"}
      </button>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"} // Use stockChart to enable the rangeSelector
        options={chartOptions}
      />
    </div>
  );
};

export default ChartComponent;
