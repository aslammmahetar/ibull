import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsSonify from "highcharts/modules/sonification";
import "highcharts/css/highcharts.css";

HighchartsSonify(Highcharts);

const ClimateDataChart = () => {
  useEffect(() => {
    let lastMonth;

    Highcharts.stockChart("container4", {
      title: {
        text: "JFK Airport Climate Data for 2013",
        align: "left",
      },
      subtitle: {
        text: "Source: data.world",
        align: "left",
      },
      sonification: {
        masterVolume: 0.5,
        duration: 25000,
        order: "simultaneous",
        showTooltip: false,
        pointGrouping: {
          groupTimespan: 250,
          algorithm: "minmax",
        },
        defaultInstrumentOptions: {
          mapping: {
            pitch: {
              min: "a3",
              max: "a7",
            },
          },
          showPlayMarker: false,
        },
        events: {
          beforeUpdate: function () {
            lastMonth = null; // Reset for speech context.
          },
        },
        globalContextTracks: [
          {
            type: "speech",
            mapping: {
              text: function (context) {
                var date = new Date(context.value);
                return date.toLocaleString("en-US", { month: "long" });
              },
              rate: 2.5,
              volume: 0.3,
            },
            valueInterval: 1000 * 60 * 60 * 24, // One day
            activeWhen: function (context) {
              var month = new Date(context.value).getMonth();
              var shouldSpeak = month !== lastMonth;
              lastMonth = month;
              return shouldSpeak;
            },
          },
        ],
      },
      // ... (rest of your chart configuration)
    });

    // Add event listeners here if needed

    return () => {
      // Cleanup or remove event listeners if necessary
    };
  }, []);

  return <div id="container4" />;
};

export default ClimateDataChart;
