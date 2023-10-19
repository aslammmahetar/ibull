import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { selectDefaultGroup } from "Redux/Multi_Strike_OI/MSAction";

// Initialize modules
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);

const MultiStrikeOIChart = ({ seriesVisibility }) => {
  const defaultStrikes = useSelector((store) => store.MSreducer.defaltStrikes);
  const displayLineNamesArray = useSelector((state) => state.MSreducer.displayLineNamesArray);
  const defaultGroup = useSelector((state) => state.MSreducer.defaultGroup);

  // Create a ref to store the Highcharts chart instance
  const chartRef = React.useRef(null);

  // Initialize the local series visibility state
  const [localSeriesVisibility, setLocalSeriesVisibility] = useState({});

  const toggleCheckbox = (lineName) => {
    const newVisibility = {
      ...localSeriesVisibility,
      [lineName]: !localSeriesVisibility[lineName],
    };
    setLocalSeriesVisibility(newVisibility);

    // Update the chart series visibility
    if (chartRef.current) {
      chartRef.current.series.forEach((series) => {
        if (newVisibility[series.name] !== undefined) {
          series.setVisible(newVisibility[series.name], true);
        }
      });
    }
  };

  useEffect(() => {
    if (defaultStrikes && defaultStrikes.length > 0) {
      const currentDate = new Date();
      const currentYear = currentDate.getUTCFullYear();
      const currentMonth = currentDate.getUTCMonth();
      const currentDay = currentDate.getUTCDate();

      const startTime = Date.UTC(currentYear, currentMonth, currentDay, 9, 15);
      const endTime = Date.UTC(currentYear, currentMonth, currentDay, 15, 30);
      const interval = 15 * 60 * 1000;

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
            rangeDescription: "Time Range from 9:30 AM to 3:30 PM with a 15-minute Interval",
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
          ? defaultStrikes.map((el) => ({
              name: el.name,
              data: el.data,
              visible: localSeriesVisibility[el.name] !== false, // Default to true
            }))
          : displayLineNamesArray.map((el) => ({
              name: el.name,
              data: el.data,
              visible: seriesVisibility[el.name] !== false, // Default to true
            })),
      };

      // Create the Highcharts chart
      const chart = Highcharts.chart("container", chartOptions);
      chartRef.current = chart;

      return () => {
        chart.destroy();
      };
    }
  }, [defaultStrikes, defaultGroup, displayLineNamesArray, seriesVisibility]);

  // Initialize the local series visibility state based on the default strikes
  useEffect(() => {
    if (defaultStrikes) {
      const visibilityState = defaultStrikes.reduce((acc, el) => {
        acc[el.name] = true;
        return acc;
      }, {});
      setLocalSeriesVisibility(visibilityState);
    }
  }, [defaultStrikes]);

  const dispatch = useDispatch();

  return (
    <div>
      <div id="container" style={{ width: "100%" }}></div>
      <MKBox display="flex" justifyContent="space-between">
        <Typography fontSize={"small"} color={"orange"}>
          <StarHalfIcon /> Most Active Strikes
        </Typography>
        <Button
          onClick={() => dispatch(selectDefaultGroup(true))}
          style={{ padding: 3, border: "lightgrey 1px solid", borderRadius: 3 }}
        >
          {defaultGroup ? "Selected" : "Select"}
        </Button>
      </MKBox>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {defaultStrikes.map((el) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={localSeriesVisibility[el.name] || false} // Ensure it's a boolean
                onChange={() => toggleCheckbox(el.name)}
                name={el.name}
              />
            }
            label={el.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiStrikeOIChart;
