import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import MKBox from "components/MKBox";

const OptionChart = () => {
  const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    // Fetch options data from the API
    axios
      .get("http://localhost:3000/records")
      .then((response) => {
        // responce has one key called data that's why => response.data.data
        setOptionsData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching options data:", error);
      });
  }, []);

  // Extract CE and PE data and handle missing data
  const ceData = optionsData.map((option) => option.CE || {});
  const peData = optionsData.map((option) => option.PE || {});

  // Extract unique strike prices for the labels
  const uniqueLabels = optionsData
    .map((option) => option.strikePrice)
    .filter((value, index, self) => self.indexOf(value) === index)
    .slice(0, 10); // Take the first 10 unique labels

  // Create datasets for CE and PE
  const ceDataset = {
    label: "CE Data",
    data: ceData.map((option) => option.strikePrice || 0),
    fill: false,
    borderColor: "red",
    backgroundColor: "  blue",
  };

  const peDataset = {
    label: "PE Data",
    data: peData.map((option) => option.strikePrice || 0),
    fill: false,
    backgroundColor: "red",
    borderColor: "blue",
  };

  const data = {
    labels: uniqueLabels,
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

  return optionsData.length > 0 ? <Bar data={data} options={options} /> : <p>Loading data...</p>;
};

export default OptionChart;
