import { Box, Card } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import MyChart from "./sections/MyChart";
import CumulativeSumChart from "../Charts/CumulativeSumChart";
import MSSTab from "./sections/EditBar";
import OpenInterestChangeTab from "./sections/OpenInterestChangeTab";

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
            <OpenInterestChangeTab />
          </Box>
          <Box width={"75%"}>
            <CumulativeSumChart />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default LiveOptionChart;
