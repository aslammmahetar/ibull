import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsLineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Highcharts Line Chart Example",
    },
    xAxis: {
      categories: ["January", "February", "March", "April", "May"],
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Dataset 1",
        data: [65, 59, 80, 81, 56],
      },
      {
        name: "Dataset 2",
        data: [28, 48, 40, 19, 86],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsLineChart;
