import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState } from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import SBFilters from "./Sections/SBFilters";

const StretergyBuilder = () => {
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
        zIndex={999}
        width="100%"
      />
      <MKBox
        minHeight="20vh"
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
          p: 1,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          mt: -5,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          // top: isSticky ? "80px" : "auto",
          zIndex: 2,
        }}
      >
        <SBFilters />
      </Card>
    </>
  );
};

export default StretergyBuilder;
