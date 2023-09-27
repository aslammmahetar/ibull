/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import Router from "Router";
export const baseURL = "http://192.168.1.4";
export default function App() {
  const { pathname } = useLocation();
  // Setting page scroll to 0 when changing the route
  // const apiUrls = [
  //   "http://192.168.1.7/NSE/GetNSEData?symbol=1",
  //   "http://192.168.1.7/NSE/GetNSEData?symbol=2",
  //   "http://192.168.1.7/NSE/GetNSEData?symbol=3",
  // ];

  // const downloadData = async (url) => {
  //   try {
  //     await axios.post(url);
  //     // Log the timestamp of the API call in localStorage
  //     const currentTime = new Date().toLocaleString();
  //     const apiCallLog = JSON.parse(localStorage.getItem("apiCallLog")) || [];
  //     apiCallLog.push(currentTime);
  //     localStorage.setItem("apiCallLog", JSON.stringify(apiCallLog));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Function to fetch data and update local storage
  //   const fetchDataAndUpdateLocalStorage = () => {
  //     apiUrls.forEach((url) => downloadData(url));
  //     console.log("Data Downloaded");
  //   };

  //   const now = new Date();
  //   const currentHour = now.getHours();
  //   const currentMinute = now.getMinutes();

  //   // Check if it's between 9:30 AM (09:30) and 3:30 PM (15:30)
  //   if (
  //     (currentHour > 9 || (currentHour === 9 && currentMinute >= 30)) &&
  //     (currentHour < 15 || (currentHour === 15 && currentMinute <= 30))
  //   ) {
  //     // Fetch data immediately when the component mounts
  //     fetchDataAndUpdateLocalStorage();

  //     // Set up an interval to fetch data every 14 minutes (840,000 milliseconds)
  //     const interval = setInterval(() => {
  //       fetchDataAndUpdateLocalStorage();
  //     }, 840000);

  //     // Clean up the interval when the component unmounts
  //     return () => clearInterval(interval);
  //   } else {
  //     // Do not fetch data if it's outside of the specified time range
  //     console.log("Data fetching paused outside of 9:30 AM to 3:30 PM");
  //     return disptch(showTimeAlert("Data updating paused outside of 9:30 AM to 3:30 PM"));
  //   }
  // }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
      <Router />
    </ThemeProvider>
  );
}
