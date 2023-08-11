/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

import OptionChain from "pages/Presentation/components/OptionChain/OptionChain";
import { FormControl, IconButton, InputBase, MenuItem, Paper, Select } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChartOutlined, OndemandVideo, Search, ShowChartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function AboutUs() {
  const navigate = useNavigate();

  var expiryDates = [
    "17-Aug-2023",
    "24-Aug-2023",
    "31-Aug-2023",
    "07-Sep-2023",
    "14-Sep-2023",
    "28-Sep-2023",
    "26-Oct-2023",
    "28-Dec-2023",
    "28-Mar-2024",
    "27-Jun-2024",
  ];

  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedExpiryDate, setSelectedExpiryDate] = useState("");

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      const rawData = response.data;
      const modifiedData = rawData.data.map((element) => {
        const combinedCEPE = {};

        for (const key in element.CE) {
          combinedCEPE[`CE_${key}`] = element.CE[key];
        }

        for (const key in element.PE) {
          combinedCEPE[`PE_${key}`] = element.PE[key];
        }

        // Remove original "CE" and "PE" objects
        const { CE, PE, ...rest } = element;

        return {
          ...rest,
          combinedCEPE,
        };
      });

      setData(modifiedData);
      setFilteredData(modifiedData);
      setSelectedExpiryDate(expiryDates[0]);
      setUnderlayingPrice(modifiedData[0].combinedCEPE.CE_underlyingValue);
      // console.log(modifiedData[0].combinedCEPE.CE_underlyingValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("http://localhost:3000/records");
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => item.expiryDate === selectedExpiryDate);
    setFilteredData(filtered);
  }, [data, selectedExpiryDate]);

  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
  };

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
          <MKBox display={"flex"} justifyContent={"space-around"}>
            <MKBox display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <IconButton onClick={handleSearchIconClick}>
                <Search />
              </IconButton>
              <div
                style={{
                  top: "50px",
                  right: "10px",
                  backgroundColor: "white",
                  borderBottom: "1px solid black",
                  transition: "transform 1s",
                  marginRight: "5px",
                }}
              >
                <InputBase placeholder="Search..." style={{ width: "200px" }} />
              </div>
              <FormControl fullWidth>
                <Select
                  style={{
                    padding: "5px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
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
              style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              fontSize="small"
            >
              ATM IV 8.7 -1.6{" "}
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
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
            >
              IVP 6
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              fontSize="small"
            >
              Per Lot
            </MKBox>
            <hr />
            <MKBox
              style={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
              fontSize="small"
            >
              <MKBox style={{ marginTop: "5px", color: "blue" }}>
                <OndemandVideo />
              </MKBox>
              Demo
            </MKBox>
          </MKBox>
        </Card>
        <OptionChain underlayingPrice={underlayingPrice} combinedData={filteredData} />
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
