import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = () => {
  useEffect(() => {
    // Configuration for the column chart
    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "Column chart with negative values",
      },
      xAxis: {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          borderRadius: "25%",
        },
      },
      series: [
        {
          name: "John",
          data: [5, 3, 4, 7, 2],
        },
        {
          name: "Jane",
          data: [2, -2, -3, 2, 1],
        },
        {
          name: "Joe",
          data: [3, 4, 4, -2, 5],
        },
      ],
    };

    // Create the chart when the component mounts
    Highcharts.chart("container", options);
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={"chart"} options={{}} />
    </div>
  );
};

export default ColumnChart;
