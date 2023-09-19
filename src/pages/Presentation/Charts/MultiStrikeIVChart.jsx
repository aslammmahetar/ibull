import React from "react";
import { Line } from "react-chartjs-2";

const MultiDataLineChart = () => {
  // ... (previous code for data and labels)

  const timeline = [];
  for (let i = 0; i < 60; i += 5) {
    const hour = Math.floor(i / 60);
    const minute = i % 60;
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    timeline.push(formattedTime);
  }

  const chartData = {
    labels: timeline,
    datasets: [
      {
        label: "CE OI",
        data: [20, 25, 30, 35, 40, 38, 42, 46, 50, 55, 60, 58], // Replace with your CE OI data
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        pointBackgroundColor: "blue",
        pointBorderColor: "blue",
        pointRadius: 4,
      },
      {
        label: "PE OI",
        data: [35, 30, 25, 20, 15, 18, 22, 28, 25, 30, 28, 32], // Replace with your PE OI data
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        pointRadius: 4,
      },
      {
        label: "FUT NIFTY",
        data: [45, 40, 35, 30, 25, 30, 35, 40, 42, 45, 50, 48], // Replace with your FUT NIFTY data
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        pointBackgroundColor: "red",
        pointBorderColor: "red",
        pointRadius: 4,
      },
    ],
  };

  return (
    <div>
      <h2>Multi-Data Line Chart with 5-Minute Interval Timeline</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Left Axis Label",
              },
              position: "left", // Position the left y-axis
            },
            y1: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Right Axis Label",
              },
              position: "right", // Position the right y-axis
              grid: {
                display: false, // Hide gridlines for the right y-axis
              },
            },
            x: {
              title: {
                display: true,
                text: "Time (HH:MM)",
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }}
      />
    </div>
  );
};

export default MultiDataLineChart;
