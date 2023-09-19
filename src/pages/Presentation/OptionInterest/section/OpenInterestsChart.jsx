import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

const OpenInterestChart = () => {
  const strikePrices = useSelector((store) => store.realReducer.strikePrices);
  const twoMonthdata = useSelector((store) => store.realReducer.twoMonthData);
  console.log(twoMonthdata);
  const ceDataset = {
    label: "PE Data",
    data: twoMonthdata.map((dataPoint) => dataPoint.pE_openInterest),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderRadius: 5,
  };

  const peDataset = {
    label: "CE Data",
    data: twoMonthdata.map((dataPoint) => dataPoint.cE_openInterest),
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
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%" }}>
        {twoMonthdata.length > 0 ? <Bar data={data} options={options} /> : <p>Loading data...</p>}
      </div>
    </div>
  );
};

export default OpenInterestChart;
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
