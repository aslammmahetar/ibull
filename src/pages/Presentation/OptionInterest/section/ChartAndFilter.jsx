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
import OpenInterestChart from "./OpenInterestsChart";
import { useSelector } from "react-redux";
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
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ogu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const currentMonthname = currentDate.getMonth();

  const currentMonth = useSelector((store) => store.realReducer.currentMonth);
  const nextMonth = useSelector((store) => store.realReducer.nextMonth);

  const displayMonth = () => {
    if (currentMonth && nextMonth) {
      return `${months[currentMonthname]} & ${
        !months[currentMonthname + 1] ? "Jan" : months[currentMonthname + 1]
      }`;
    }
    if (currentMonth && !nextMonth) {
      return `${!months[currentMonthname + 1] ? "Jan" : months[currentMonthname]}`;
    }
    if (!currentMonth && nextMonth) {
      return `${!months[currentMonthname + 1] ? "Jan" : months[currentMonthname + 1]}`;
    }
    return "Nothing";
  };
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
              <Typography variant="h5">Open Interest - {displayMonth()} Expiries</Typography>
            </MKBox>
            <hr />
            <Box display={"flex"}>
              <Box width={"81%"}>
                <OpenInterestChart />
              </Box>
              <Box
                width={"29%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
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
