import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const ChartExample = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://demo-live-data.highcharts.com/aapl-c.json");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "AAPL Stock Price",
    },
    series: [
      {
        name: "AAPL",
        data: chartData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
    </div>
  );
};

export default ChartExample;
