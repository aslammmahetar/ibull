import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "react-highcharts";

const IntradayStockChart = () => {
  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json")
      .then((response) => response.json())
      .then((data) => {
        // Create the Highcharts chart
        Highcharts.stockChart("container2", {
          title: {
            text: "AAPL stock price by minute",
          },
          rangeSelector: {
            buttons: [
              {
                type: "hour",
                count: 1,
                text: "1h",
              },
              {
                type: "day",
                count: 1,
                text: "1D",
              },
              {
                type: "all",
                count: 1,
                text: "All",
              },
            ],
            selected: 1,
            inputEnabled: false,
          },
          series: [
            {
              name: "AAPL",
              type: "candlestick",
              data: data,
              tooltip: {
                valueDecimals: 2,
              },
            },
          ],
        });
      });
  }, []);

  return <div id="container2" />;
};

export default IntradayStockChart;
