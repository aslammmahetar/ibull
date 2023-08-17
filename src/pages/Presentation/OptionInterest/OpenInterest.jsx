import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState } from "react";
import routes from "routes";
import OptionChart from "./section/OptionChart";
import bgImage from "assets/images/Banner.jpeg";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import MKButton from "components/MKButton";
import FullWidthTabs from "./section/Tabs";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import InfoIcon from "@mui/icons-material/Info";
import ChartAndFilter from "./section/ChartAndFilter";

const OpenInterest = () => {
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
        style={{ width: "98%", margin: "auto", marginTop: "-25px" }}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <FullWidthTabs />
        <ChartAndFilter />
      </Card>
    </>
  );
};

export default OpenInterest;
