import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const OpenInterestChart = () => {
  const currentDate = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ogu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentMonth = currentDate.getMonth();
  const strikePrices = useSelector((store) => store.realReducer.strikePrices);
  const twoMonthdata = useSelector((store) => store.realReducer.twoMonthData);
  const currentIsChecked = useSelector((store) => store.realReducer.currentMonth);
  const nextMonth = useSelector((store) => store.realReducer.nextMonth);
  const currentMonthData = twoMonthdata.filter((el) =>
    el.cE_expiryDate.includes(months[currentMonth])
  );
  const nextMonthData = twoMonthdata.filter((el) =>
    el.cE_expiryDate.includes(months[currentMonth + 1])
  );

  const displayData = () => {
    if (currentIsChecked && nextMonth) {
      return twoMonthdata.slice(0, strikePrices.length);
    }
    if (currentIsChecked && !nextMonth) {
      return currentMonthData.slice(0, strikePrices.length);
    }
    if (!currentIsChecked && nextMonth) {
      return nextMonthData.slice(0, strikePrices.length);
    }
    return [];
  };
  const ceDataset = {
    label: "PE Data",
    data: displayData().map((dataPoint) => dataPoint.pE_openInterest),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderRadius: 5,
  };

  const peDataset = {
    label: "CE Data",
    data: displayData().map((dataPoint) => dataPoint.cE_openInterest),
    fill: false,
    backgroundColor: "#FF4747",
    borderColor: "#FF4747",
    borderRadius: 5,
  };

  const data = {
    labels: strikePrices,
    datasets: [ceDataset, peDataset],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Strike Price",
        },
      },
      y: {
        title: {
          display: true,
          text: "Last Price",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      {twoMonthdata.length > 0 ? <Bar data={data} options={options} /> : <p>Loading data...</p>}
    </div>
  );
};

export default OpenInterestChart;
