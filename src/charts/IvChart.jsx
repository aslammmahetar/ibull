// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';

import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { UserData } from "./data";

// const BarChart = () => {
//   // Define the data for the chart

// const [dataa, setData] = useState([]);
// const [filteredData, setFilteredData] = useState([]);
// const [selectedExpiry, setSelectedExpiry] = useState('All');

// const [strikeData, setStrikedata] = useState([])

// const getData = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const rawData = response.data;

//     const ceData = rawData.data
//       ? rawData.data.map((item) => item.CE).filter((item) => item !== undefined)
//       : [];
//     const peData = rawData.data
//       ? rawData.data.map((item) => item.PE).filter((item) => item !== undefined)
//       : [];

//     const combinedData = [
//       ...ceData.map((item) => ({ ...item, type: "CE" })),
//       ...peData.map((item) => ({ ...item, type: "PE" })),
//     ];
//     setData(combinedData);
//     setFilteredData(combinedData);
//     for (let el of combinedData) {
//       strikeData.push(el.strikePrice)
//     }
//     console.log(strikeData)
//     console.log(combinedData)
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getData("http://localhost:3000/records");
// }, []);

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       label: 'Sales',
//       data: strikeData,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//     },
//   ],
// };

// // Define the options for the chart
// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

//   useEffect(() => {
//   })

//   return <Bar data={data} options={options} />;
// };

// export default BarChart;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';

// const data = {
//   labels: ['Option A', 'Option B', 'Option C'],
//   datasets: [
//     {
//       label: 'Profit/Loss',
//       data: [2000, -1500, 3000],
//       backgroundColor: ['green', 'red', 'blue'],
//     },
//   ],
// };

// const [dataa, setData] = useState([]);
// const [filteredData, setFilteredData] = useState([]);
// const [selectedExpiry, setSelectedExpiry] = useState("All");
// const [strikeData, setStrikedata] = useState([]);
// const getData = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const rawData = response.data;
//     const ceData = rawData.data
//       ? rawData.data.map((item) => item.CE).filter((item) => item !== undefined)
//       : [];
//     const peData = rawData.data
//       ? rawData.data.map((item) => item.PE).filter((item) => item !== undefined)
//       : [];
//     const combinedData = [
//       ...ceData.map((item) => ({ ...item, type: "CE" })),
//       ...peData.map((item) => ({ ...item, type: "PE" })),
//     ];
//     setData(combinedData);
//     setFilteredData(combinedData);
//     for (let el of combinedData) {
//       strikeData.push(el.strikePrice);
//     }
//     console.log(strikeData);
//     console.log(combinedData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   getData("http://localhost:3000/records");
// }, []);
// const data = {
//   labels: strikeData,
//   datasets: [
//     {
//       label: "Profit/Loss",
//       data: strikeData,
//       backgroundColor: "rgba(75,192,192,0.4)",
//     },
//   ],
// };
// // Define the options for the chart
// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };
// return <Bar data={data} options={options} />;

// const BarChart = () => {
//   const [userdata, setUserData] = useState({
//     labels: UserData.map((data) => data.year),
//     datasets: [
//       {
//         label: "Number of users",
//         data: UserData.map((data) => data.userGain),
//         backgroundColor: "teal",
//         borderColor: "black",
//         borderWidth: "2",
//       },
//     ],
//   });
//   return (
//     <div style={{ width: "50%", height: "800px" }}>
//       <Bar data={userdata} options={{ maintainAspectRatio: false }}></Bar>;
//       <Line data={userdata} options={{ maintainAspectRatio: false }} />
//       <Pie data={userdata} options={{ maintainAspectRatio: false }} />
//     </div>
//   );
// };

// export default BarChart;

import React from "react";

const ohlcData = [
  { date: "2023-08-01", open: 100, high: 120, low: 90, close: 110 },
  { date: "2023-08-02", open: 110, high: 130, low: 100, close: 125 },
  // ... Add more data points
];

const data = {
  labels: ohlcData.map((item) => item.date),
  datasets: [
    {
      label: "Open",
      data: ohlcData.map((item) => item.open),
      backgroundColor: "rgba(75, 192, 192, 0.4)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "High",
      data: ohlcData.map((item) => item.high),
      backgroundColor: "rgba(255, 99, 132, 0.4)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Low",
      data: ohlcData.map((item) => item.low),
      backgroundColor: "rgba(54, 162, 235, 0.4)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Close",
      data: ohlcData.map((item) => item.close),
      backgroundColor: "rgba(255, 206, 86, 0.4)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const OHLCBarChart = () => {
  return <Bar data={data} options={options} width={800} height={400} />;
};

export default OHLCBarChart;
