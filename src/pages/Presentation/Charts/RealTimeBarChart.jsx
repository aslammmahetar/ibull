// src/RealTimeBarChart.js
import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RealTimeBarChart = () => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      animation: Highcharts.svg, // Enable SVG animations for real-time effect
    },
    title: {
      text: "Real-Time Open Interest by Strike Price",
    },
    xAxis: {
      categories: [], // Will contain strike prices
      title: {
        text: "Strike Prices",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Open Interest",
      },
    },
    series: [
      {
        name: "Open Interest",
        data: [], // Will contain open interest values
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;

      // Simulate real-time data updates (replace with actual data source)
      const updateChartData = () => {
        // Generate random strike prices and open interest values for demonstration
        const randomStrikePrices = Array.from({ length: 10 }, () =>
          (Math.random() * 10000).toFixed(2)
        );
        const randomOpenInterest = randomStrikePrices.map(() => Math.floor(Math.random() * 1000));

        setChartOptions({
          ...chartOptions,
          xAxis: {
            categories: randomStrikePrices,
            title: {
              text: "Strike Prices",
            },
          },
          series: [
            {
              name: "Open Interest",
              data: randomOpenInterest,
            },
          ],
        });

        // Set a timeout to simulate data updates (adjust the interval as needed)
        setTimeout(updateChartData, 3000); // Update data every 3 seconds
      };

      // Initialize the chart and start updating data
      Highcharts.chart(chart, chartOptions);
      updateChartData();
    }
  }, [chartOptions]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartRef} />
    </div>
  );
};

export default RealTimeBarChart;
