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

  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);
  const [originalData, setOriginalData] = useState([]);
  const [closestElement, setClosestElement] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [strikePrice, setStrikePrices] = useState([]);

  const dispatch = useDispatch();
  const strikePrices = useSelector((store) => store.realReducer.strikePrices);
  const twoMonthdata = useSelector((store) => store.realReducer.twoMonthData);
  const currentIsChecked = useSelector((store) => store.realReducer.currentMonth);
  const nextMonth = useSelector((store) => store.realReducer.nextMonth);
  const store = useSelector((store) => store.realReducer.data);
  const ulValue = useSelector((store) => store.realReducer.ulValue);
  const lessThanATM = useSelector((store) => store.realReducer.lessThanATM);

  useEffect(() => {
    const filteredData =
      store.length > 0
        ? store.filter((item) => {
            return item.cE_expiryDate.includes(months[currentMonth]);
          })
        : [];
    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;
    for (let el of filteredData) {
      if (CEmaxOI < el.cE_openInterest) {
        CEmaxOI = el.cE_openInterest;
      }
      if (PEmaxOI < el.pE_openInterest) {
        PEmaxOI = el.pE_openInterest;
      }
    }

    setCallmaxOI(CEmaxOI);
    console.log(CEmaxOI);
    setPutmaxOI(PEmaxOI);
    console.log(PEmaxOI);
    console.log(filteredData);
    setOriginalData(filteredData);
  }, []);

  useEffect(() => {
    const targetValue = ulValue;
    let closestElement = null;

    if (originalData.length > 0) {
      // Use originalData here
      closestElement = originalData.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - targetValue);
        const currDiff = Math.abs(curr.cE_strikePrice - targetValue);
        return prevDiff < currDiff ? prev : curr;
      });
      setClosestElement(closestElement);
    }

    if (closestElement) {
      // Use originalData to reset filteredData
      setFilteredData(originalData);
      const index = originalData.indexOf(closestElement);
      const startIndex = Math.max(0, index - 5);
      const endIndex = Math.min(originalData.length - 1, index + 5);
      const elementsAroundClosest = originalData.slice(startIndex, endIndex + 5);

      setFilteredData(elementsAroundClosest);
      console.log(elementsAroundClosest);
      if (elementsAroundClosest.length > 0) {
        const strikePriceArray = elementsAroundClosest.map((el) => el.cE_strikePrice);
        console.log(strikePriceArray);
        setStrikePrices(strikePriceArray);
      }
    } else {
      console.log("No closest element found.");
    }
  }, [lessThanATM]);

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
    data: filteredData.map((dataPoint) => dataPoint.pE_changeinOpenInterest),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderWidth: 1,
    borderRadius: 10,
  };

  const peDataset = {
    label: "CE Data",
    data: filteredData.map((dataPoint) => dataPoint.cE_changeinOpenInterest),
    fill: false,
    backgroundColor: "#FF4747",
    borderColor: "#FF4747",
    borderWidth: 1,
    borderRadius: 10,
  };

  const data = {
    labels: strikePrice,
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
