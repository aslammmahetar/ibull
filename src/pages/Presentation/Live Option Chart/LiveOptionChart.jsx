import { Box, Card, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import MyChart from "./sections/MyChart";
import CumulativeSumChart from "../Charts/CumulativeSumChart";
import MSSTab from "./sections/EditBar";
import OpenInterestChangeTab from "./sections/OpenInterestChangeTab";
import ChartComponent from "../Charts/LinePlusColumns";
import PutCallRatio from "./sections/PutCallRatio";
import MaxPain from "./sections/MaxPain";
import OptionIntFuture from "./sections/OptionIntFuture";
import OptionIV from "./sections/OptionIV";
import IVPercentile from "./sections/IVPercentile";
import SolarEmploymentChart from "../Charts/SolarEmplomentchart";
import ClickableDataPointsChart from "../Charts/ClickAbleDatPoints";
import StockMarketChart from "../Charts/StockMarketChart";

const LiveOptionChart = () => {
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
          mx: { xs: 2, lg: 2 },
          mb: 4,
          mt: -10,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          zIndex: 2,
        }}
      >
        <Box display={"flex"} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <MSSTab />
          </Box>
          <Box width={"75%"}>
            <MyChart />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <OpenInterestChangeTab heading={"Option Intereset"} />
          </Box>
          <Box width={"75%"}>
            <CumulativeSumChart />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <OpenInterestChangeTab heading={"Option Intereset Change"} />
          </Box>
          <Box width={"75%"}>
            <ChartComponent />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <PutCallRatio />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <SolarEmploymentChart />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <MaxPain />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ClickableDataPointsChart />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <OptionIntFuture heading={"Open Interest"} />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <StockMarketChart />
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <OptionIntFuture heading={"Open Interest Change"} />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">Chart Section</Typography>
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <OptionIV />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">Chart Section</Typography>
          </Box>
        </Box>
        <Box display={"flex"} mt={2} bgcolor={"whitesmoke"} justifyContent={"space-between"}>
          <Box width={"25%"}>
            <IVPercentile />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">Chart Section</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default LiveOptionChart;
