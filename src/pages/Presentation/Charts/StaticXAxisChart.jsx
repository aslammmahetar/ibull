import React, { useState, useEffect } from "react";
import Chart from "chart.js";

const StaticXAxisChart = () => {
  const staticXAxisLabels = ["Strike 1", "Strike 2", "Strike 3", "Strike 4", "Strike 5"];

  const [chartData, setChartData] = useState({
    labels: staticXAxisLabels,
    datasets: [
      {
        label: "Open Interest",
        data: [100, 150, 120, 180, 200],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Initialize the chart
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Strike Prices",
            },
            labels: {
              // Use static labels for the x-axis
              display: true,
              callback: (value, index, values) => staticXAxisLabels[index],
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Open Interest",
            },
          },
        },
      },
    });
  }, [chartData]);

  // Function to update the chart data when a filter is applied
  const handleFilter = () => {
    // Replace this with your filter logic
    const filteredData = {
      labels: staticXAxisLabels,
      datasets: [
        {
          label: "Open Interest",
          data: [150, 120, 180, 220, 250, 300], // Increase the data array size
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    setChartData(filteredData);
  };

  return (
    <div>
      <button onClick={handleFilter}>Apply Filter</button>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default StaticXAxisChart;
