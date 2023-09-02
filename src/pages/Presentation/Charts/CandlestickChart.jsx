import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const HollowCandlestickChart = () => {
  useEffect(() => {
    // Sample data for hollow candlestick chart
    const data = [
      [1, 10, 30, 5, 20], // [x, open, high, low, close]
      [2, 20, 35, 10, 25],
      [3, 25, 40, 15, 30],
      // Add more data points as needed
    ];

    // Create the chart when the component mounts
    Highcharts.stockChart("container", {
      title: {
        text: "Hollow Candlestick Chart",
      },
      series: [
        {
          type: "candlestick",
          name: "Candlestick",
          data: data.map(([x, open, high, low, close]) => ({
            x,
            open,
            high,
            low,
            close,
            // Add custom properties for hollow candlestick appearance
            isHollow: close < open,
          })),
          color: "green", // Color for filled candles
          upColor: "red", // Color for hollow candles
          lineColor: "black", // Border color
          upLineColor: "black", // Border color for hollow candles
          lineWidth: 1, // Border width
        },
      ],
    });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={{}} />
    </div>
  );
};

export default HollowCandlestickChart;
