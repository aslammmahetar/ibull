import React, { useEffect } from "react";
import Highcharts from "highcharts";

const KarasjokWeatherChart = () => {
  useEffect(() => {
    const chartConfig = {
      chart: {
        zoomType: "xy",
        renderTo: "container15", // This element's ID will be used for rendering the chart
      },
      title: {
        text: "Karasjok weather, 2021",
        align: "left",
      },
      subtitle: {
        text: (
          <span>
            Source:{" "}
            <a
              href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"
              target="_blank"
            >
              YR
            </a>
          </span>
        ),
        align: "left",
      },
      xAxis: [
        {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          crosshair: true,
        },
      ],
      yAxis: [
        {
          labels: {
            format: "{value}°C",
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          title: {
            text: "Temperature",
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
        },
        {
          title: {
            text: "Precipitation",
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          labels: {
            format: "{value} mm",
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        align: "left",
        x: 80,
        verticalAlign: "top",
        y: 60,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "rgba(255,255,255,0.25)",
      },
      series: [
        {
          name: "Precipitation",
          type: "column",
          yAxis: 1,
          data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0, 60.0, 28.6, 32.1],
          tooltip: {
            valueSuffix: " mm",
          },
        },
        {
          name: "Temperature",
          type: "spline",
          data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8, -0.7, -11.0, -16.4],
          tooltip: {
            valueSuffix: "°C",
          },
        },
      ],
    };

    Highcharts.chart(chartConfig);
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <div id="container15" />
    </div>
  );
};

export default KarasjokWeatherChart;
