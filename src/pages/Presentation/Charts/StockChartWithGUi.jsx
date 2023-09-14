import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";

// Initialize Highcharts modules
HC_exporting(Highcharts);
HC_exportData(Highcharts);

function StockChart() {
  const chartContainer = useRef(null);

  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      try {
        // Fetch the JSON data
        const response = await fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json");
        const data = await response.json();

        // Process the data
        const ohlc = [];
        const volume = [];

        data.forEach((item) => {
          const [date, open, high, low, close, volumeValue] = item;
          ohlc.push([date, open, high, low, close]);
          volume.push([date, volumeValue]);
        });

        // Create the Highcharts stock chart
        Highcharts.stockChart(chartContainer.current, {
          yAxis: [
            {
              labels: {
                align: "left",
              },
              height: "80%",
              resize: {
                enabled: true,
              },
            },
            {
              labels: {
                align: "left",
              },
              top: "80%",
              height: "20%",
              offset: 0,
            },
          ],
          tooltip: {
            shape: "square",
            headerShape: "callout",
            borderWidth: 0,
            shadow: false,
            positioner: function (width, height, point) {
              var chart = this.chart,
                position;

              if (point.isHeader) {
                position = {
                  x: Math.max(
                    // Left side limit
                    chart.plotLeft,
                    Math.min(
                      point.plotX + chart.plotLeft - width / 2,
                      // Right side limit
                      chart.chartWidth - width - chart.marginRight
                    )
                  ),
                  y: point.plotY,
                };
              } else {
                position = {
                  x: point.series.chart.plotLeft,
                  y: point.series.yAxis.top - chart.plotTop,
                };
              }

              return position;
            },
          },
          series: [
            {
              type: "ohlc",
              id: "aapl-ohlc",
              name: "AAPL Stock Price",
              data: ohlc,
            },
            {
              type: "column",
              id: "aapl-volume",
              name: "AAPL Volume",
              data: volume,
              yAxis: 1,
            },
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 800,
                },
                chartOptions: {
                  rangeSelector: {
                    inputEnabled: false,
                  },
                },
              },
            ],
          },
        });
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchDataAndRenderChart();
  }, []);

  return <div ref={chartContainer} style={{ height: "400px", width: "100%" }}></div>;
}

export default StockChart;
