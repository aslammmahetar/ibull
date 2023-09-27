import {
  AppBar,
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useEffect, useState } from "react";
import routes from "routes";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
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
import { Search } from "@mui/icons-material";
const OpenInterestContent = () => {
  return (
    <>
      <Typography variant="h4">Open Interest - Options</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>This chart shows the Open Interest (OI) in options contracts of a stock or index</li>
        <li>
          When Put OI increases, options sellers are selling puts. This means the market may not go
          down.
        </li>
        <li>
          When Call OI increases, options sellers are selling calls. This means the market may not
          go up.
        </li>
        <li>Therefore : </li>
        <ul>
          <li>
            When Call OI increases, the market is bearish and when it decreases, it is bullish.
          </li>
          <li>
            When Put OI increases, the market is bullish and when it decreases, it is bearish.
          </li>
        </ul>
        <li>
          Open interest analysis works best in NIFTY weekly Options. It may not work for BANKNIFTY,
          FINNIFTY, single stocks, etc. that do not have significant OI
        </li>
        <li>
          If multiple expiry dates are selected, we add the OI of options contracts of selected
          expiry dates and show the sum
        </li>
        <li>
          You can select a custom strike range in this chart. In this case, we include the OI of
          only the strikes in the range for showing data and for calculations
        </li>
      </ul>
    </>
  );
};

const OpenInterestChanegContent = () => {
  return (
    <>
      <Typography variant="h4">Open Interest Change - Option</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>This chart shows the change in open interest in options in a time interval</li>
        <li>
          For example, a call OI change of +2.1L at 2:15 PM, with 15-minute time interval selected
          means that 2.1L call OI was added from 2:15:01 to 2:29:59
        </li>
      </ul>
    </>
  );
};

const OpenInContent = () => {
  return (
    <>
      <Typography variant="h4">Open Interest - Futures</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>This chart shows the open interest in futures contracts of a stock or index</li>
        <li>
          If multiple expiry dates are selected, we add the open interest of futures contracts of
          selected expiry dates and show the sum
        </li>
      </ul>
    </>
  );
};

const OptionIntFutureContent = () => {
  return (
    <>
      <Typography variant="h4">Futures - Open Interest Change Chart</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>
          This chart shows the change in open interest of futures contracts in a time interval
        </li>
        <li>
          For example, a Futures OI change of +10.1L at 2:15 PM, with 15-minute time interval
          selected means that 10.1L futures OI was added from 2:15:01 to 2:29:59
        </li>
      </ul>
    </>
  );
};

const LiveOptionChart = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Set the scroll threshold based on your requirements
  const scrollThreshold = 30;

  // Add a scroll event listener to track the scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add an event listener to the window to check for scroll position
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [_, setIsVisible] = useState(false);
  const handleScroll = () => {
    // Set isVisible to true if the user has scrolled down, false if at the top
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 10,
      behavior: "smooth", // Add smooth scrolling animation
    });
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
        <AppBar
          position={isSticky ? "sticky" : "static"}
          style={{ top: 69, bottom: 25, zIndex: 999 }}
        >
          <Card
            sx={{
              p: 1,
            }}
          >
            <Box>
              <MKBox
                style={{
                  padding: "5px",
                  // width: "70%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <Search />
                </IconButton>
                <FormControl style={{ width: "40%" }}>
                  <Select
                    style={{ height: "37px" }}
                    defaultValue={1}
                    // onChange={(e) => handleStream(e.target.value)}
                  >
                    <MenuItem style={{ height: "100%" }} value={1}>
                      NIFTY
                    </MenuItem>
                    <MenuItem value={2}>BANKNIFTY</MenuItem>
                    <MenuItem value={3}>FIN NIFTY</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ width: "40%" }}>
                  <Select
                    fullWidth
                    defaultValue={1}
                    style={{
                      height: "37px",
                      paddingLeft: 10,
                    }}
                  >
                    <MenuItem value={1} onClick={scrollToTop}>
                      Jump To{" "}
                    </MenuItem>
                    <MenuItem value={2}>
                      <a href="#multi_straddle">Multi Straddle-Strangle</a>
                    </MenuItem>
                    <MenuItem value={3}>
                      <a href="#open_interest">Open Intereset - Option</a>
                    </MenuItem>
                    <MenuItem value={4}>
                      <a href="#open_Int_change">Option Intereset Change - Option</a>
                    </MenuItem>
                    <MenuItem value={5}>
                      <a href="#put_call_ratio">Put Call Ratio</a>
                    </MenuItem>
                    <MenuItem value={6}>
                      <a href="#max_pain">Max Pain</a>
                    </MenuItem>
                    <MenuItem value={7}>
                      <a href="#open_int_future">Open Interest - Future</a>
                    </MenuItem>
                    <MenuItem value={8}>
                      <a href="#open_int_change_future">Open Interest Change - Future</a>
                    </MenuItem>
                    <MenuItem value={9}>
                      <a href="#option_iv">Option IV</a>
                    </MenuItem>
                    <MenuItem value={10}>
                      <a href="#iv_percetile">IV Percentile</a>
                    </MenuItem>
                  </Select>
                </FormControl>
                <Box display={"flex"}>
                  <Tooltip title="Open Chart">
                    <Button variant="outlined" size="small">
                      <TrendingUpOutlinedIcon color="info" />
                    </Button>
                  </Tooltip>
                  <Button
                    variant="outlined"
                    style={{ width: "5px", color: "blue", marginLeft: "4px" }}
                  >
                    info
                  </Button>
                </Box>
              </MKBox>
            </Box>
          </Card>
        </AppBar>
        <Box
          // display={"flex"}
          bgcolor={"whitesmoke"}
          id="multi_straddle"
          justifyContent={"space-between"}
        >
          <Box width={"100%"}>
            <MSSTab />
          </Box>
          <Box width={"100%"}>
            <MyChart />
          </Box>
        </Box>
        <Box
          // display={"flex"}
          mt={2}
          id="open_interest"
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"100%"}>
            <OpenInterestChangeTab
              heading={"Open Intereset"}
              OpenInterestContent={OpenInterestContent}
            />
          </Box>
          <Box width={"100%"}>
            <CumulativeSumChart />
          </Box>
        </Box>
        <Box
          // display={"flex"}
          id="open_Int_change"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"100%"}>
            <OpenInterestChangeTab
              OpenInterestContent={OpenInterestChanegContent}
              heading={"Open Intereset Change"}
            />
          </Box>
          <Box width={"100%"}>
            <ChartComponent />
          </Box>
        </Box>
        <Box
          // display={"flex"}
          id="put_call_ratio"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"100%"}>
            <PutCallRatio />
          </Box>
          <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <SolarEmploymentChart />
          </Box>
        </Box>
        <Box
          display={"flex"}
          id="max_pain"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"25%"}>
            <MaxPain />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ClickableDataPointsChart />
          </Box>
        </Box>
        <Box
          display={"flex"}
          id="open_int_future"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"25%"}>
            <OptionIntFuture heading={"Open Interest"} OptionIntFutureContent={OpenInContent} />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <StockMarketChart />
          </Box>
        </Box>
        <Box
          display={"flex"}
          id="open_int_change_future"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"25%"}>
            <OptionIntFuture
              heading={"Open Interest Change"}
              OptionIntFutureContent={OptionIntFutureContent}
            />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">Chart Section</Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          id="option_iv"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
          <Box width={"25%"}>
            <OptionIV />
          </Box>
          <Box width={"75%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">Chart Section</Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          id="iv_percetile"
          mt={2}
          bgcolor={"whitesmoke"}
          justifyContent={"space-between"}
        >
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
