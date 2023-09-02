import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const StockComparisonChart = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const seriesOptions = [];
    const names = ["MSFT", "AAPL", "GOOG"];
    let seriesCounter = 0;

    const createChart = () => {
      Highcharts.stockChart("container", {
        rangeSelector: {
          selected: 4,
        },
        yAxis: {
          labels: {
            format: "{#if (gt value 0)}+{/if}{value}%",
          },
          plotLines: [
            {
              value: 0,
              width: 2,
              color: "silver",
            },
          ],
        },
        plotOptions: {
          series: {
            compare: "percent",
            showInNavigator: true,
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true,
        },
        series: seriesOptions,
      });
    };

    const fetchData = (url, name) => {
      axios
        .get(url)
        .then((response) => {
          seriesOptions.push({
            name: name,
            data: response.data,
          });

          seriesCounter += 1;

          if (seriesCounter === names.length) {
            createChart();
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // Fetch data for each company
    fetchData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json",
      "MSFT"
    );
    fetchData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json",
      "AAPL"
    );
    fetchData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json",
      "GOOG"
    );
  }, []);

  return (
    <div>{chartOptions && <HighchartsReact highcharts={Highcharts} options={chartOptions} />}</div>
  );
};

export default StockComparisonChart;
