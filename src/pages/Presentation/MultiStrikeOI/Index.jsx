import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState } from "react";
import bgImage from "assets/images/Banner.jpeg";
import routes from "routes";
import StickyNavbar from "../OptionInterest/section/StickyNavbar";
import { Box, Button, Card, IconButton, InputBase, Tooltip } from "@mui/material";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MSfilters from "./MSfilters";
import MSChartAndFilters from "./MSChartAndFilters";
import Footer from "pages/LandingPages/Author/sections/Footer";

const MSoi = () => {
  const [open, setOpen] = useState(false);
  //   const strikesAboveAndBelowVal = [5, 10, 15, 20, 25, "All"];

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
        minHeight="27vh"
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
          mb: 4,
          mt: -10,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          zIndex: 2,
        }}
      >
        <StickyNavbar />
        <MSChartAndFilters />
      </Card>
      <Footer />
    </>
  );
};

export default MSoi;
