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
import { BarChartOutlined, Search, ShowChartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OptionChain from "./OptionChain/OptionChain";
import SettingComp from "./OptionChain/SettingComp";
import { getData } from "Redux/OptionChainPage/ocAction";
import { updateDataAndCalculate } from "Redux/OptionChainPage/ocAction";
import { getExpiry } from "Redux/OptionChainPage/ocAction";
import ScrollToTopButton from "pages/Presentation/OptionInterest/section/ScrollToTopButton";
function AboutUs() {
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(1);
  const [data, setData] = useState([]);

  //from redux
  const ulValue = useSelector((store) => store.OptionChainReducer.ulValue);
  const store = useSelector((store) => store.OptionChainReducer.data);
  console.log(store);
  const filteredData = useSelector((store) => store.OptionChainReducer.filteredData);
  const callMax = useSelector((store) => store.OptionChainReducer.callMax);
  const putMax = useSelector((store) => store.OptionChainReducer.putMax);
  const closestElement = useSelector((store) => store.OptionChainReducer.closestElement);
  const fontSize = useSelector((store) => store.OptionChainReducer.fontSize);
  const expiryDates = useSelector((store) => store.OptionChainReducer.expiryDates);
  console.log(expiryDates);
  const lessThanATM = useSelector((store) => store.OptionChainReducer.lessThanATM);
  const greaterThanATM = useSelector((store) => store.OptionChainReducer.greaterThanATM);
  const nearestThursday = useSelector((store) => store.realReducer.nearestThurday);
  useEffect(() => {
    dispatch(getExpiry(symbol));
    dispatch(getData(symbol));
    setData(filteredData);
  }, [symbol, fontSize]);

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

  //expirydate special case
  const [selectedExpiryDate, setSelectedExpiryDate] = useState(expiryDates[0]);

  const handleStream = (val) => {
    setSymbol(val);
  };

  useEffect(() => {
    dispatch(updateDataAndCalculate(store, selectedExpiryDate, ulValue));
  }, [selectedExpiryDate, store, ulValue]);

  useEffect(() => {
    setSelectedExpiryDate(expiryDates[0]);
  }, [symbol, store, ulValue]);
  //handling expirydates filter
  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
  };

  useEffect(() => {
    const closestIndex = filteredData.indexOf(closestElement);
    const startIndex = Math.max(0, closestIndex - lessThanATM);
    const endIndex = Math.min(filteredData.length - 1, closestIndex + greaterThanATM);

    const elementsAroundClosest = filteredData.slice(startIndex, endIndex + 1);
    setData(elementsAroundClosest);
    console.log(elementsAroundClosest);
  }, [filteredData, lessThanATM, greaterThanATM]);

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
      <ScrollToTopButton />
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
            // bgcolor: "#60AFFF",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox
            display={"flex"}
            justifyContent={"space-around"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              textAlign: "center",
            }}
          >
            <MKBox display={"flex"} alignItems={"center"} justifyContent={"center"} color="white">
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
          </MKBox>
        </Card>
        <OptionChain
          underlayingPrice={ulValue}
          combinedData={data}
          CemaxOI={callMax}
          PeMaxOI={putMax}
          closeToStrikePrice={closestElement}
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
