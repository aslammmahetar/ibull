import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockPriceChart = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json")
      .then((response) => response.json())
      .then((data) => {
        // Process data into OHLC and volume series
        const ohlc = [];
        const volume = [];
        data.forEach((item) => {
          ohlc.push([
            item[0], // the date
            item[1], // open
            item[2], // high
            item[3], // low
            item[4], // close
          ]);

          volume.push([
            item[0], // the date
            item[5], // the volume
          ]);
        });

        // Define Highcharts chart options
        const options = {
          chart: {
            type: "ohlc",
          },
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
              let position;

              if (point.isHeader) {
                position = {
                  x: Math.max(
                    this.chart.plotLeft,
                    Math.min(
                      point.plotX + this.chart.plotLeft - width / 2,
                      this.chart.chartWidth - width - this.chart.marginRight
                    )
                  ),
                  y: point.plotY,
                };
              } else {
                position = {
                  //   x: point.series.chart.plotLeft,
                  //   y: point.series.yAxis.top - this.chart.plotTop,
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
        };

        setChartOptions(options);
      });
  }, []);

  return (
    <div>{chartOptions && <HighchartsReact highcharts={Highcharts} options={chartOptions} />}</div>
  );
};

export default StockPriceChart;
