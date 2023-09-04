import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import { Card, Stack } from "@mui/material";
import ChartExample from "../StretergyBuilder/Sections/ChartExmple";
import LiveRandomDataChart from "../StretergyBuilder/Sections/LiveRandomDataChart";
import StockComparisonChart from "../Charts/StockComparisonChart";
import IntradayStockChart from "../Charts/IntradayStockChart";
import IntradayStockChart2 from "../Charts/IntradayStockChart2";
import CumulativeSumChart from "../Charts/CumulativeSumChart";

const Watchlist = () => {
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
        zIndex={1}
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
          p: 2,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          mt: -5,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
        }}
      >
        <Stack spacing={4}>
          <ChartExample></ChartExample>
          <LiveRandomDataChart />
          <br />
          <StockComparisonChart />
          {/* <StockPriceChart /> */}
          <IntradayStockChart />
          <IntradayStockChart2 />
          <CumulativeSumChart />
        </Stack>
      </Card>
    </>
  );
};

export default Watchlist;
