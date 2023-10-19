import CircularIndeterminate from "pages/CircularIndeterminate";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const OpenInterestChart = () => {
  const strikePrices = useSelector((store) => store.oiReducer.strikePrice);
  const twoMonthdata = useSelector((store) => store.oiReducer.recentTwomonth);
  const { timeBasedrecentTwomonth } = useSelector((store) => store.oiReducer);
  console.log(timeBasedrecentTwomonth);
  const currentMonthselementsAroundClosest = useSelector(
    (store) => store.oiReducer.currentMonthselementsAroundClosest
  );
  const nextMonthselementsAroundClosest = useSelector(
    (store) => store.oiReducer.nextMonthselementsAroundClosest
  );
  const currentMonth = useSelector((store) => store.oiReducer.currentMonth);
  const nextMonth = useSelector((store) => store.oiReducer.nextMonth);

  const displayDataPe = () => {
    if (currentMonth && nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map((dataPoint, index) => {
        return (
          (dataPoint?.pE_openInterest || 0) +
          (nextMonthselementsAroundClosest[index]?.pE_openInterest || 0)
        );
      });
      return returnIt;
    } else if (currentMonth && !nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map(
        (dataPoint, index) => dataPoint.pE_openInterest || 0
      );
      return returnIt;
    } else if (!currentMonth && nextMonth) {
      const returnIt = nextMonthselementsAroundClosest.map(
        (dataPoint) => dataPoint.pE_openInterest || 0
      );
      return returnIt;
    }
  };

  const displayDataCe = () => {
    if (currentMonth && nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map(
        (dataPoint, index) =>
          dataPoint?.cE_openInterest ||
          0 + nextMonthselementsAroundClosest[index]?.cE_openInterest ||
          0
      );
      console.log(returnIt);
      return returnIt;
    } else if (currentMonth && !nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map(
        (dataPoint, index) => dataPoint.cE_openInterest || 0
      );
      console.log(returnIt);
      return returnIt;
    } else if (!currentMonth && nextMonth) {
      const returnIt = nextMonthselementsAroundClosest.map(
        (dataPoint) => dataPoint.cE_openInterest || 0
      );
      console.log(returnIt);
      return returnIt;
    }
  };

  useEffect(() => {
    displayDataPe();
    displayDataCe();
  }, [twoMonthdata]);
  const ceDataset = {
    label: "PE Data",
    data: displayDataPe(),
    fill: false,
    backgroundColor: "#B2BD4C",
    borderColor: "#B2BD4C",
    borderWidth: 1,
    borderRadius: 10,
  };

  const peDataset = {
    label: "CE Data",
    data: displayDataCe(),
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
    <div style={{ width: "100%" }}>
      {twoMonthdata.length > 0 ? <Bar data={data} options={options} /> : <CircularIndeterminate />}
    </div>
  );
};

export default OpenInterestChart;
