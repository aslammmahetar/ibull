import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { makingReqforNSE } from "Redux/RealActions";
import Timebuttons from "../OptionInterest/section/Timebuttons";
import CircularIndeterminate from "pages/CircularIndeterminate";

const OICHange = () => {
  const dispatch = useDispatch();
  const strikePrices = useSelector((store) => store.realReducer.strikePrices);
  const twoMonthdata = useSelector((store) => store.realReducer.twoMonthData);
  const currentMonthselementsAroundClosest = useSelector(
    (store) => store.realReducer.currentMonthselementsAroundClosest
  );
  const nextMonthselementsAroundClosest = useSelector(
    (store) => store.realReducer.nextMonthselementsAroundClosest
  );
  const currentMonth = useSelector((store) => store.realReducer.currentMonth);
  const nextMonth = useSelector((store) => store.realReducer.nextMonth);

  useEffect(() => {
    dispatch(makingReqforNSE(5));
  }, []);

  const displayDataPe = () => {
    if (currentMonth && nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map((dataPoint, index) => {
        console.log(dataPoint, index);
        return (
          (dataPoint?.pE_changeinOpenInterest || 0) +
          (nextMonthselementsAroundClosest[index]?.pE_changeinOpenInterest || 0)
        );
      });
      return returnIt;
    } else if (currentMonth && !nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map(
        (dataPoint, index) => dataPoint.pE_changeinOpenInterest || 0
      );
      return returnIt;
    } else if (!currentMonth && nextMonth) {
      const returnIt = nextMonthselementsAroundClosest.map(
        (dataPoint) => dataPoint.pE_changeinOpenInterest || 0
      );
      return returnIt;
    }
  };

  const displayDataCe = () => {
    if (currentMonth && nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map((dataPoint, index) => {
        console.log(dataPoint, index);
        return (
          (dataPoint?.cE_changeinOpenInterest || 0) +
          (nextMonthselementsAroundClosest[index]?.cE_changeinOpenInterest || 0)
        );
      });
      return returnIt;
    } else if (currentMonth && !nextMonth) {
      const returnIt = currentMonthselementsAroundClosest.map(
        (dataPoint, index) => dataPoint.cE_changeinOpenInterest || 0
      );
      return returnIt;
    } else if (!currentMonth && nextMonth) {
      const returnIt = nextMonthselementsAroundClosest.map(
        (dataPoint) => dataPoint.cE_changeinOpenInterest || 0
      );
      return returnIt;
    }
  };

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
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%" }}>
        {twoMonthdata.length > 0 ? (
          <Bar data={data} options={options} />
        ) : (
          <CircularIndeterminate />
        )}
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
