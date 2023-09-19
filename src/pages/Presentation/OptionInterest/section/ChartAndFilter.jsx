import MKBox from "components/MKBox";
import React from "react";
import { Filters } from "./Filters";
import { makeStyles } from "@mui/styles";
import BarChart from "./ChartsSection";
import { Box, Card, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WeatherDataChart from "pages/Presentation/Charts/WetherDataChart";
import DatePickerComp from "./DatePickerComp";
import KarasjokWeatherChart from "pages/Presentation/Charts/KarasjokWeatherChart";
import OIChangeChart from "pages/Presentation/Charts/OIChangeChart";
import OpenInterest from "../OpenInterest";
import OpenInterestChart from "./OpenInterestsChart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  filteration: {
    position: "fixed",
    top: 0,
  },
  chartContainer: {
    border: "solid black 1px",
    width: "100%",
    position: "sticky",
  },
}));
const ChartAndFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MKBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "column" },
        }}
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Filters />
        <Box
          className={classes.chartContainer}
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          }}
        >
          <BarChart />
          <Card sx={{ padding: "10px", marginTop: "20px" }}>
            <MKBox style={{ padding: "5px" }}>
              <Typography variant="h5">Open Interest - Aug & Sep Expiries</Typography>
            </MKBox>
            <hr />
            <OpenInterestChart />
            <hr />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box p={1} display={"flex"} alignItems={"center"} width={"50%"}>
                <Box>
                  <Typography fontSize={"small"}>Option Chain as on</Typography>
                </Box>
                <Box>
                  <DatePickerComp />
                </Box>
              </Box>
              <Box display={"flex"} width={"40%"} justifyContent={"space-around"}>
                <Box>
                  <Typography fontSize={"small"}>Total Calls</Typography>
                  <Typography variant="h6">8.36L</Typography>
                </Box>
                <Box>
                  <Typography fontSize={"small"}>Total Puts</Typography>
                  <Typography variant="h6">4.5L</Typography>
                </Box>
                <Box>
                  <Typography fontSize={"small"}>
                    PCR <HelpOutlineIcon />
                  </Typography>
                  <Typography variant="h6">0.6</Typography>
                </Box>
                <Box>
                  <Typography fontSize={"small"}>RELIANCE</Typography>
                  <Typography variant="h6">2471</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card sx={{ padding: "10px", marginTop: "20px" }}>
            <WeatherDataChart />
            <hr />
          </Card>
          <Card sx={{ padding: "10px", marginTop: "20px" }}>
            <KarasjokWeatherChart />
            <hr />
          </Card>
        </Box>
      </MKBox>
    </div>
  );
};

export default ChartAndFilter;
