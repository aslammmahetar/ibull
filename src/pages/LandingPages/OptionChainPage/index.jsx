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

import { FormControl, IconButton, InputBase, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BarChartOutlined, OndemandVideo, Search, ShowChartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OptionChain from "./OptionChain/OptionChain";
import { getReq } from "Redux/action";
import { makingReqforNSE } from "Redux/RealActions";
import SettingComp from "./OptionChain/SettingComp";
function AboutUs() {
  // var expiryDates = [
  //   "21-Sep-2023",
  //   "28-Sep-2023",
  //   "05-Oct-2023",
  //   "12-Oct-2023",
  //   "19-Oct-2023",
  //   "26-Oct-2023",
  //   "30-Nov-2023",
  //   "28-Dec-2023",
  //   "28-Mar-2024",
  //   "27-Jun-2024",
  //   "26-Dec-2024",
  //   "26-Jun-2025",
  //   "24-Dec-2025",
  //   "25-Jun-2026",
  //   "31-Dec-2026",
  //   "24-Jun-2027",
  //   "30-Dec-2027",
  //   "29-Jun-2028",
  // ];

  //
  const navigate = useNavigate();
  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);
  const [closestElement, setClosestElement] = useState({});
  const [open, setOpen] = useState(false);
  const limitedData = useSelector((store) => store.realReducer.limitedData);
  const [elementsAroundClosest, setelementsAroundClosest] = useState([]);
  const lessThanATM = useSelector((store) => store.realReducer.lessThanATM);
  console.log(lessThanATM);
  //from redux
  const ulValue = useSelector((store) => store.realReducer.ulValue);
  const fontSize = useSelector((store) => store.reducer.fontSize);
  const expiryDates = useSelector((store) => store.realReducer.expiryDates);

  const [selectedExpiryDate, setSelectedExpiryDate] = useState(expiryDates[0]?.expiryDates || "");
  const store = useSelector((store) => store.realReducer.data);

  //
  const dispatch = useDispatch();

  //
  useEffect(() => {
    // setData(store); // Set data from the store
    setSelectedExpiryDate(expiryDates[0] && expiryDates[0].expiryDates);
    setUnderlayingPrice(ulValue);
  }, [ulValue]);

  //
  useEffect(() => {
    const filtered2 =
      store.length > 0 ? store.filter((item) => item.cE_expiryDate === selectedExpiryDate) : [];
    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;
    console.log(filtered2);

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
  }, [selectedExpiryDate, store, closestElement, ulValue]);

  //
  useEffect(() => {
    const targetValue = ulValue; // The value to compare against (cE_underlyingValue)
    let closestElement = null;

    if (filteredData.length > 0) {
      closestElement = filteredData.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - targetValue);
        const currDiff = Math.abs(curr.cE_strikePrice - targetValue);
        return prevDiff < currDiff ? prev : curr;
      });
      setClosestElement(closestElement);
    }

    if (closestElement) {
      const index = filteredData.indexOf(closestElement);
      const startIndex = Math.max(0, index - lessThanATM);
      const endIndex = Math.min(filteredData.length - 1, index + 40);
      const elementsAroundClosest = filteredData.slice(startIndex, endIndex + 1);

      setelementsAroundClosest(elementsAroundClosest);
      console.log(elementsAroundClosest);
    } else {
      console.log("No closest element found.");
    }
  }, [closestElement, lessThanATM]);

  useEffect(() => {
    dispatch(getReq);
    dispatch(makingReqforNSE(0)); // Dispatch the function to fetch data
    // Set selectedExpiryDate to the first expiry date when the component is mounted
    if (expiryDates.length > 0) {
      setSelectedExpiryDate(expiryDates[0].expiryDates);
    }
  }, [fontSize, expiryDates, data]);
  //handling expirydates filter
  const handleExpiryDateChange = (event) => {
    console.log(event.target.value);
    setSelectedExpiryDate(event.target.value.expiryDates);
    console.log(selectedExpiryDate);
  };

  //
  const handleSearchIconClick = () => {
    setOpen(!open);
  };

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
        minHeight="75vh"
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
          mt: -25,
          mb: 4,
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
                <IconButton onClick={handleSearchIconClick}>
                  <Search />
                </IconButton>
                <div
                  style={{
                    top: "50px",
                    right: "10px",
                    marginRight: "5px",
                  }}
                >
                  <InputBase
                    placeholder="Type Stock Name :SBIN, RELIANCE etc."
                    style={{ width: "110%", fontSize: "small" }}
                    value={"NIFTY FUT 19500 50 0.0%"}
                  />
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
                  {expiryDates.map((item, ind) => (
                    <MenuItem key={ind} value={item} style={{ textAlign: "center" }}>
                      <Typography fontSize={"small"} textAlign={"center"}>
                        {item.expiryDates.slice(0, 10)}
                      </Typography>
                    </MenuItem>
                  ))}
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
          closeToStrikePrice={closestElement}
        />
        <SettingComp />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
