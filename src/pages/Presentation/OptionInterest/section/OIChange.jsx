import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getReq } from "Redux/action";

const OICHange = () => {
  const dispatch = useDispatch();
  const strikePrices = useSelector((store) => store.reducer.strikePrices);
  const twoMonthData = useSelector((store) => store.reducer.twoMonthData);
  let fiveMinData = useSelector((store) => store.reducer.fiveMinData);
  let fiveMinBool = useSelector((store) => store.reducer.fiveMinBool);
  const firstFiveFromTwoMonth = twoMonthData.slice(0, 10);
  const firstFiveFromFivemin = fiveMinData.slice(0, 10);

  const CEtimeBasedData = () => {
    if (fiveMinBool) {
      console.log("Hello from CE");
      const data = firstFiveFromTwoMonth.map(
        (option, index) =>
          (option.combinedCEPE.CE_openInterest || 0) -
          (firstFiveFromFivemin[index].combinedCEPE.CE_changeinOpenInterest || 0)
      );
      console.log(data);
      return data;
    } else {
      return firstFiveFromTwoMonth.map(
        (option) => option.combinedCEPE.CE_changeinOpenInterest || 0
      );
    }
  };

  const PEtimeBasedData = () => {
    if (fiveMinBool) {
      const data = firstFiveFromTwoMonth.map(
        (option, index) =>
          (fiveMinData[index].combinedCEPE?.PE_changeinOpenInterest || 0) -
          (option.combinedCEPE.PE_changeinOpenInterest || 0)
      );
      console.log(data);
      return data;
    } else {
      return firstFiveFromTwoMonth.map(
        (option) => option.combinedCEPE.PE_changeinOpenInterest || 0
      );
    }
  };

  useEffect(() => {
    // Fetch options data from the API
    dispatch(getReq);
  }, []);
  // Extract unique strike prices for the labels
  const labels = strikePrices.slice(0, 10); // Take the first 10 unique labels

  // Create datasets for CE and PE
  const ceDataset = {
    label: "CE Data",
    data: CEtimeBasedData(),
    fill: false,
    borderColor: "#FF4747",
    backgroundColor: "#FF4747",
  };

  const peDataset = {
    label: "PE Data",
    data: PEtimeBasedData(),
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
