import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { makingReqforNSE } from "Redux/RealActions";
import Timebuttons from "../OptionInterest/section/Timebuttons";

const OICHange = () => {
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

  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(makingReqforNSE(10));
  }, []);

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
    data: displayData().map((dataPoint) => dataPoint.pE_changeinOpenInterest),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderWidth: 1,
    borderRadius: 10,
  };

  const peDataset = {
    label: "CE Data",
    data: displayData().map((dataPoint) => dataPoint.cE_changeinOpenInterest),
    fill: false,
    backgroundColor: "#FF4747",
    borderColor: "#FF4747",
    borderWidth: 1,
    borderRadius: 10,
  };

  const data = {
    labels: strikePrices,
    datasets: [ceDataset, peDataset],
  };

  const options = {
    animation: {
      duration: 2000, // Animation duration in milliseconds
      easing: "easeOutBounce", // Easing function
    },
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
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%" }}>
        {twoMonthdata.length > 0 ? <Bar data={data} options={options} /> : <p>Loading data...</p>}
      </div>
      <div
        style={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Timebuttons />
      </div>
    </div>
  );
};

export default OICHange;
