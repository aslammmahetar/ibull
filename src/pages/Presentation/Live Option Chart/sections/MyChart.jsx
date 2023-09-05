import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { Paper } from "@mui/material";

const names = ["MSFT", "AAPL", "GOOG"];

const MyChart = () => {
  const seriesOptions = [];
  let seriesCounter = 0;

  const createChart = () => {
    Highcharts.stockChart("container10", {
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

  const loadData = (url, name) => {
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
        console.error("Error loading data:", error);
      });
  };

  useEffect(() => {
    loadData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json",
      "MSFT"
    );
    loadData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json",
      "AAPL"
    );
    loadData(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json",
      "GOOG"
    );
  }, []);

  return (
    <div>
      <Paper id="container10" style={{ height: "57.3vh" }}>
        <HighchartsReact highcharts={Highcharts} options={{}} />
      </Paper>
    </div>
  );
};

export default MyChart;
