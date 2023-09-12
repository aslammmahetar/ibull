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
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import footerRoutes from "footer.routes";

// Images
// import bgImage from "/"
import bgImage from "assets/images/Banner.jpeg";

import { FormControl, IconButton, InputBase, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BarChartOutlined, OndemandVideo, Search, ShowChartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReq } from "Redux/action";
import OptionChain from "./OptionChain/OptionChain";
function AboutUs() {
  const navigate = useNavigate();

  var expiryDates = [
    "13-Sep-2023",
    "20-Sep-2023",
    "28-Sep-2023",
    "04-Oct-2023",
    "11-Oct-2023",
    "26-Oct-2023",
    "30-Nov-2023",
    "28-Dec-2023",
    "28-Mar-2024",
    "27-Jun-2024"
  ];

  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedExpiryDate, setSelectedExpiryDate] = useState("");
  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);

  const store = useSelector((store) => store.reducer.data);
  const ulValue = useSelector((store) => store.reducer.underlyingValue);
  const fontSize = useSelector((store) => store.reducer.fontSize);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReq);
    setData(store);
    setSelectedExpiryDate(expiryDates[0]);
    setUnderlayingPrice(ulValue);
  }, [ulValue, fontSize]);

  useEffect(() => {
    //filteration by the exprydates
    const filtered2 =
      store.length > 0 ? store.filter((item) => item.expiryDate === selectedExpiryDate) : [];
    console.log(filtered2);
    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;

    //getting maximum values of openInterests
    for (let el of filtered2) {
      if (CEmaxOI < el.combinedCEPE.CE_openInterest) {
        CEmaxOI = el.combinedCEPE.CE_openInterest;
      }
      if (PEmaxOI < el.combinedCEPE.PE_openInterest) {
        PEmaxOI = el.combinedCEPE.PE_openInterest;
      }
    }
    setCallmaxOI(CEmaxOI);
    setPutmaxOI(PEmaxOI);
    setFilteredData(filtered2);
    // console.log(filtered);
  }, [data, selectedExpiryDate]);

  //handling expirydates filter
  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
  };

  //
  const [open, setOpen] = useState(false);
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
                    // borderBottom: "1px solid black",
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
                    padding: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "10px",
                  }}
                  value={selectedExpiryDate}
                  onChange={handleExpiryDateChange}
                  label="Expiry Date"
                >
                  {/* Include the default option */}
                  {/* <MenuItem value="10-Aug-2023">10-Aug-2023</MenuItem> */}
                  {expiryDates.map((item, ind) => (
                    <MenuItem key={ind} value={item}>
                      {item}
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
        />
        {/* <Information />
        <Team />
        <Featuring />
        <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
// const ceData = rawData.data
// ? rawData.data.map((item) => item.CE).filter((item) => item !== undefined)
// : [];
// setCEdata(ceData);
// setCEFilteredData(ceData);
// const peData = rawData.data
// ? rawData.data.map((item) => item.PE).filter((item) => item !== undefined)
// : [];
//
// const getData = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const rawData = response.data;
//     const modifiedData = rawData.data.map((element) => {
//       const combinedCEPE = {};

//       for (const key in element.CE) {
//         combinedCEPE[`CE_${key}`] = element.CE[key];
//       }

//       for (const key in element.PE) {
//         combinedCEPE[`PE_${key}`] = element.PE[key];
//       }

//       // Remove original "CE" and "PE" objects
//       const { CE, PE, ...rest } = element;

//       return {
//         ...rest,
//         combinedCEPE,
//       };
//     });

//     // setFilteredData(modifiedData);
//     // console.log(modifiedData[0].combinedCEPE.CE_underlyingValue);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const filtered = data.filter((item) => item.expiryDate === selectedExpiryDate);
// getData("http://localhost:3000/records");
