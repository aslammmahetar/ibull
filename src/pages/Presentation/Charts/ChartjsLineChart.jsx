import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartjsLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
          {
            label: "Dataset 2",
            data: [28, 48, 40, 19, 86],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartjsLineChart;
