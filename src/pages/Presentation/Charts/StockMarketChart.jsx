import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StockMarketChart = () => {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Stock Price Chart",
    },
    subtitle: {
      text: "Sample stock price data",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.x:%e. %b}: {point.y:.2f}",
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 2.5,
        },
      },
    },
    series: [
      {
        name: "AAPL",
        data: generateStockData(),
      },
      {
        name: "GOOGL",
        data: generateStockData(),
      },
    ],
  };

  function generateStockData() {
    const data = [];
    const startDate = new Date(2020, 0, 1).getTime();
    let price = 100; // Starting price
    for (let i = 0; i < 100; i++) {
      const date = new Date(startDate + i * 24 * 60 * 60 * 1000);
      price += (Math.random() - 0.5) * 10; // Random price change
      data.push([date, price]);
    }
    return data;
  }

  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StockMarketChart;
