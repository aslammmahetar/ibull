import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "react-highcharts";

const LiveBirthsChart = () => {
  useEffect(() => {
    const chartConfig = {
      data: {
        table: "datatable",
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Live births in Norway",
      },
      subtitle: {
        text: 'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Amount",
        },
      },
    };

    Highcharts.chart("container13", chartConfig);
  }, []); // Empty dependency array to run once on mount

  const highchartsOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Live births in Norway",
    },
    subtitle: {
      text: 'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>',
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Amount",
      },
    },
  };

  return (
    <div id="container13">
      {/* Chart will be rendered here */}
      {/* <HighchartsReact highcharts={Highcharts} options={highchartsOptions} /> */}
    </div>
  );
};

export default LiveBirthsChart;
