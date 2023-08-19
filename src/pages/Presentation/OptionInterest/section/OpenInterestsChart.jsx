import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getReq } from "Redux/action";

const OpenIntrestes = () => {
  const dispatch = useDispatch();
  const strikePrices = useSelector((store) => store.reducer.strikePrices);
  const twoMonthData = useSelector((store) => store.reducer.twoMonthData);
  const currentMonth = useSelector((store) => store.reducer.currentMonth);
  const nextMonth = useSelector((store) => store.reducer.nextMonth);
  const firstMonth = useSelector((store) => store.reducer.firstMonth);
  const secondMonth = useSelector((store) => store.reducer.secondMonth);

  useEffect(() => {
    // Fetch options data from the API
    dispatch(getReq);
  }, []);
  // Extract unique strike prices for the labels
  const labels = strikePrices.slice(0, 20); // Take the first 10 unique labels

  // Create datasets for CE and PE
  const ceDataset = {
    label: "CE Data",
    data: (() => {
      if (currentMonth && nextMonth) {
        return twoMonthData.map((option) => option.combinedCEPE.CE_openInterest || 0);
      } else if (!currentMonth && nextMonth) {
        return secondMonth.map((option) => option.combinedCEPE.CE_openInterest || 0);
      } else if (currentMonth && !nextMonth) {
        return firstMonth.map((option) => option.combinedCEPE.CE_openInterest || 0);
      } else {
        return [];
      }
    })(),
    fill: false,
    borderColor: "#FF4747",
    backgroundColor: "#FF4747",
  };

  const peDataset = {
    label: "PE Data",
    data: (() => {
      if (currentMonth && nextMonth) {
        return twoMonthData.map((option) => option.combinedCEPE.PE_openInterest || 0);
      } else if (!currentMonth && nextMonth) {
        return secondMonth.map((option) => option.combinedCEPE.PE_openInterest || 0);
      } else if (currentMonth && !nextMonth) {
        return firstMonth.map((option) => option.combinedCEPE.PE_openInterest || 0);
      } else {
        return [];
      }
    })(),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
  };

  const data = {
    labels: labels,
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

  return twoMonthData.length > 0 ? <Bar data={data} options={options} /> : <p>Loading data...</p>;
};

export default OpenIntrestes;
// axios
//   .get("http://localhost:3000/records")
//   .then((response) => {
//     console.log(response.data.strikePrices);
//     // responce has one key called data that's why => response.data.data
//     setOptionsData(response.data.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching options data:", error);
//   });
