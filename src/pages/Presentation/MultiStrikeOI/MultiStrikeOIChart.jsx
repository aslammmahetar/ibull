import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import { useSelector } from "react-redux";

// Initialize modules
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);

const MultiStrikeOIChart = ({ seriesVisibility }) => {
  const defaultStrikes = [
    {
      name: "28 SEP 2400 CE",
      data: [10, 20, 30, 40, 50, 60, 70],
      visible: true,
    },
  ];

  const displayLineNamesArray = useSelector((state) => state.MSreducer.displayLineNamesArray);
  const defaultGroup = useSelector((state) => state.MSreducer.defaultGroup);
  useEffect(() => {
    // Get the current date in UTC
    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getUTCDate();

    // Set the start time to 9:15 AM and end time to 3:30 PM in UTC
    const startTime = Date.UTC(currentYear, currentMonth, currentDay, 9, 15);
    const endTime = Date.UTC(currentYear, currentMonth, currentDay, 15, 30);

    // Calculate the number of milliseconds in 15 minutes
    const interval = 15 * 60 * 1000;

    // Create the chart configuration
    const chartOptions = {
      // ... (existing chart options)
      title: {
        display: false,
        text: "Multi Strike OI Chart",
      },
      subtitle: {
        display: false,
      },
      yAxis: {
        title: {
          text: "NIFTY FUT",
        },
      },
      xAxis: {
        type: "datetime",
        labels: {
          format: "{value:%H:%M}",
        },
        accessibility: {
          rangeDescription: "Time Range from 9:30 AM to 3:30 PM with 15-minute Interval",
        },
      },
      legend: {},
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: startTime,
          pointInterval: interval,
          pointEnd: endTime,
        },
      },

      series: defaultGroup
        ? defaultStrikes
        : displayLineNamesArray.map((el) => ({
            name: el.name,
            data: el.data,
            visible: seriesVisibility[el.name], // Use local state to set visibility
          })),
    };

    // Create the Highcharts chart
    const chart = Highcharts.chart("container", chartOptions);

    return () => {
      chart.destroy(); // Cleanup when the component unmounts
    };
  }, [displayLineNamesArray, seriesVisibility]);
  return (
    <div>
      <div id="container" style={{ width: "100%" }}></div>
    </div>
  );
};

export default MultiStrikeOIChart;
