import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { makingReqforNSE } from "Redux/RealActions";
import Timebuttons from "../OptionInterest/section/Timebuttons";

const OICHange = () => {
  const dispatch = useDispatch();
  const strikePrices = useSelector((store) => store.realReducer.strikePrices);
  const twoMonthdata = useSelector((store) => store.realReducer.twoMonthData);
  console.log(twoMonthdata);

  useEffect(() => {
    dispatch(makingReqforNSE(10));
  }, []);

  const ceDataset = {
    label: "PE Data",
    data: twoMonthdata.map((dataPoint) => dataPoint.pE_pchangeinOpenInterest),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderWidth: 1,
    borderRadius: 10,
  };

  const peDataset = {
    label: "CE Data",
    data: twoMonthdata.map((dataPoint) => dataPoint.cE_pchangeinOpenInterest),
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
