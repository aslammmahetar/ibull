import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import { useSelector } from "react-redux";

// Initialize modules
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);

const MultiStrikeOIChart = () => {
  const displayLineNamesArray = useSelector((state) => state.MSreducer.displayLineNamesArray);
  console.log(displayLineNamesArray);
  const selectAll = useSelector((state) => state.MSreducer.selectAll);
  const lineSeries = useSelector((state) => state.MSreducer.lineSeries);
  console.log(lineSeries);

  // const [selectAll, setSelectAll] = useState(true); // State for "Select All" checkbox

  // Function to update the chart based on checkbox state
  const updateChart = (chart) => {
    chart.series.forEach((series) => {
      const seriesName = series.name.replace(/\s/g, "");
      // series.setVisible(displayLines[seriesName]);
    });
  };

  // Function to handle individual checkbox changes
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   const updatedDisplayLines = {
  //     ...displayLines,
  //     [name]: checked,
  //   };
  //   dispatch(setDisplayLines(updatedDisplayLines));
  // };

  // Function to handle "Select All" checkbox change
  // const handleSelectAllChange = (event) => {
  //   const checked = event.target.checked;

  //   // Dispatch an action to update the selectAll state in Redux
  //   dispatch(setSelectAll(checked));

  //   // Dispatch an action to update the displayLines state in Redux
  //   const updatedDisplayLines = {};
  //   for (const key in displayLines) {
  //     updatedDisplayLines[key] = checked;
  //   }
  //   dispatch(setDisplayLines(updatedDisplayLines));
  // };
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
          text: "Number of Employees",
        },
      },
      xAxis: {
        type: "datetime",
        labels: {
          format: "{value:%H:%M}",
        },
        accessibility: {
          rangeDescription: "Time Range from 9:15 AM to 3:30 PM with 15-minute Interval",
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
        },
      },

      series: displayLineNamesArray.map((el) => el),
      //  [
      //   {
      //     name: "28 SEP 2400 CE",
      //     data: lineSeries,
      //     visible: displayLines["28 SEP 2380 CE"],
      //   },
      //   {
      //     name: "28 SEP 2380 CE",
      //     data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050],
      //     visible: displayLines["28 SEP 2380 CE"],
      //   },
      //   {
      //     name: "28 SEP 2420 CE",
      //     data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663],
      //     visible: displayLines["28 SEP 2420 CE"],
      //   },
      //   {
      //     name: "28 SEP 2360 PE",
      //     data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077],
      //     visible: displayLines["28 SEP 2360 PE"],
      //   },
      //   {
      //     name: "28 SEP 2380 PE",
      //     data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073],
      //     visible: displayLines["28 SEP 2380 PE"],
      //   },
      // ],
      // ... (rest of the chart options)
    };

    // Create the Highcharts chart
    const chart = Highcharts.chart("container", chartOptions);

    return () => {
      chart.destroy(); // Cleanup when the component unmounts
    };
  }, [displayLineNamesArray]);

  return (
    <div>
      <div id="container" style={{ width: "100%" }}></div>
      {/* <DefaultStrike
        selectAll={selectAll}
        handleCheckboxChange={handleCheckboxChange}
        displayLines={displayLines}
        handleSelectAllChange={handleSelectAllChange}
      /> */}
    </div>
  );
};

export default MultiStrikeOIChart;
