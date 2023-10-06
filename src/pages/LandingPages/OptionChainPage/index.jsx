// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "/"
import bgImage from "assets/images/Banner.jpeg";

import { FormControl, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BarChartOutlined, OndemandVideo, Search, ShowChartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OptionChain from "./OptionChain/OptionChain";
import { makingReqforNSE } from "Redux/RealActions";
import SettingComp from "./OptionChain/SettingComp";
import { getNIFTYExpiryDate } from "Redux/RealActions";
function AboutUs() {
  //
  const navigate = useNavigate();
  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);
  const [closeToStrikePrice, setClosestElement] = useState({});
  const [symbol, setSymbol] = useState(1);
  const [originalData, setOriginalData] = useState([]);
  const [bool, setBool] = useState(false);

  //from redux
  const ulValue = useSelector((store) => store.realReducer.ulValue);
  console.log(ulValue);
  const fontSize = useSelector((store) => store.reducer.fontSize);
  const expiryDates = useSelector((store) => store.realReducer.expiryDates);
  const lessThanATM = useSelector((store) => store.realReducer.lessThanATM);
  const greaterThanATM = useSelector((store) => store.realReducer.greaterThanATM);
  const timeAlert = useSelector((store) => store.realReducer.timeAlert);
  const nearestThursday = useSelector((store) => store.realReducer.nearestThurday);
  console.log(nearestThursday);

  // Get today's date
  const today = new Date();

  // Find the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayOfWeek = today.getDay();

  // Calculate the number of days until the next Thursday
  const daysUntilNextThursday = (11 - currentDayOfWeek) % 7;

  // Calculate the date of the next Thursday by adding the number of days
  const nextThursday = new Date(today);
  nextThursday.setDate(today.getDate() + daysUntilNextThursday);

  // Create an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the date as "dd-mmm-yyyy"
  const formattedDate = `${nextThursday.getDate()}-${
    monthNames[nextThursday.getMonth()]
  }-${nextThursday.getFullYear()}`;

  console.log(formattedDate);

  //expirydate special case
  const [selectedExpiryDate, setSelectedExpiryDate] = useState(formattedDate);
  const store = useSelector((store) => store.realReducer.data);
  console.log(store);

  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNIFTYExpiryDate(symbol));
    dispatch(makingReqforNSE(0, symbol));
  }, [symbol, fontSize]);

  // useEffect(() => {
  //   // Function to fetch data and update local storage
  //   const fetchDataAndUpdateLocalStorage = () => {
  //     if (expiryDates.length > 0) {
  //       setSelectedExpiryDate(expiryDates[0]);
  //     }

  //     // Store the current timestamp in local storage
  //     localStorage.setItem("lastExecutionTime", Date.now());
  //     console.log("Made a call by default");
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

  //     // Check local storage for the last execution time
  //     const lastExecutionTime = localStorage.getItem("lastExecutionTime");
  //     const currentTime = Date.now();

  //     // Calculate the time since the last execution
  //     const timeSinceLastExecution = currentTime - (lastExecutionTime || 0);

  //     // Set up an interval to fetch data every 15 minutes (900,000 milliseconds)
  //     const interval = setInterval(() => {
  //       fetchDataAndUpdateLocalStorage();
  //       console.log("made call at", Date.now());
  //     }, 900000 - timeSinceLastExecution); // Adjust the interval based on the time elapsed

  //     // Clean up the interval when the component unmounts
  //     return () => clearInterval(interval);
  //   } else {
  //     // Do not fetch data if it's outside of the specified time range
  //     console.log("Data fetching paused outside of 9:30 AM to 3:30 PM");
  //     return dispatch(showTimeAlert("Data updating paused outside of 9:30 AM to 3:30 PM"));
  //   }
  // }, [symbol]);

  const handleStream = (val) => {
    setSymbol(val);
  };

  //
  useEffect(() => {
    // setData(store); // Set data from the store
    setSelectedExpiryDate(expiryDates[0]);
    setUnderlayingPrice(ulValue);
  }, [ulValue]);

  //
  useEffect(() => {
    const filtered2 =
      store.length > 0
        ? store.filter((item) => {
            return item.cE_expiryDate === selectedExpiryDate;
          })
        : [];
    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;

    // Getting maximum values of openInterests
    for (let el of filtered2) {
      if (CEmaxOI < el.cE_openInterest) {
        CEmaxOI = el.cE_openInterest;
      }
      if (PEmaxOI < el.pE_openInterest) {
        PEmaxOI = el.pE_openInterest;
      }
    }
    setCallmaxOI(CEmaxOI);
    setPutmaxOI(PEmaxOI);
    setFilteredData(filtered2);
    setOriginalData(filtered2);
  }, [selectedExpiryDate, store, closeToStrikePrice]);

  //
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
      console.log(closestElement);
    }
    if (closestElement) {
      // Use originalData to reset filteredData
      setFilteredData(originalData);
      const index = originalData.indexOf(closestElement);
      const startIndex = Math.max(0, index - lessThanATM);
      const endIndex = Math.min(originalData.length - 1, index + greaterThanATM);
      const elementsAroundClosest = originalData.slice(startIndex, endIndex + 1);

      setFilteredData(elementsAroundClosest);
    } else {
      console.log("No closest element found.");
    }
  }, [closeToStrikePrice, lessThanATM, greaterThanATM, ulValue, bool]);

  //handling expirydates filter
  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
  };

  //
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        sticky
        transparent={false}
        dark
      />
      <MKBox
        minHeight="25vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          backgroundImage: `url(${bgImage})`,
        }}
      ></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -10,
          mb: 4,
          // backgroundColor:"#011627",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Card
          style={{ margin: "auto", marginBottom: "20px" }}
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 0,
            mb: 4,
            width: "80%",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox
            display={"flex"}
            justifyContent={"space-around"}
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
              textAlign: "center",
            }}
          >
            <MKBox display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <MKBox display={"flex"} style={{ padding: "5px" }} justifyContent="space-around">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <IconButton>
                    <Search />
                  </IconButton>
                  <FormControl fullWidth>
                    <Select
                      style={{ height: "37px" }}
                      defaultValue={1}
                      onChange={(e) => handleStream(e.target.value)}
                    >
                      <MenuItem style={{ height: "100%" }} value={1}>
                        NIFTY
                      </MenuItem>
                      <MenuItem value={2}>BANKNIFTY</MenuItem>
                      <MenuItem value={3}>FIN NIFTY</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </MKBox>
              <FormControl fullWidth>
                <Select
                  style={{
                    width: "100%",
                    padding: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "black",
                    marginLeft: "10px",
                  }}
                  value={selectedExpiryDate} // Set the value to the selectedExpiryDate state
                  onChange={handleExpiryDateChange}
                  defaultValue={expiryDates[0]}
                >
                  {expiryDates.map((item, ind) => {
                    return (
                      <MenuItem key={ind} value={item} style={{ textAlign: "center" }}>
                        <Typography fontSize={"small"} textAlign={"center"}>
                          {item}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </MKBox>
            <MKBox
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              fontSize="small"
            >
              <Typography fontSize={"small"}>ATM IV 8.7 -1.6</Typography>
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize="small"
              onClick={() => {
                navigate("/pages/landing-pages/option-trade/ivchart");
              }}
            >
              IV Chart
              <MKBox>
                <BarChartOutlined />
              </MKBox>
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="small"
            >
              OI Graphs
              <MKBox>
                <ShowChartOutlined />
              </MKBox>
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              fontSize="small"
              justifyContent={"center"}
            >
              IVP 6
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="small"
            >
              Per Lot
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="small"
            >
              <MKBox style={{ marginTop: "5px", color: "blue" }}>
                <OndemandVideo />
              </MKBox>
              Demo
            </MKBox>
          </MKBox>
        </Card>
        <OptionChain
          underlayingPrice={underlayingPrice}
          combinedData={filteredData}
          CemaxOI={callMax}
          PeMaxOI={putMax}
          closeToStrikePrice={closeToStrikePrice}
        />
      </Card>
      <div className="sticky-div" style={{ position: "sticky", bottom: "0" }}>
        <SettingComp />
      </div>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
