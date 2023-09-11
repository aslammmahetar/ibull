import MKBox from "components/MKBox";
import React from "react";
import { Filters } from "./Filters";
import { makeStyles } from "@mui/styles";
import BarChart from "./ChartsSection";
import { Box, Card, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MonthlyRainfallChart from "pages/Presentation/Charts/GirlsNameChart";
import WeatherDataChart from "pages/Presentation/Charts/WetherDataChart";
import DatePickerComp from "./DatePickerComp";
import KarasjokWeatherChart from "pages/Presentation/Charts/KarasjokWeatherChart";
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
    maxHeight: "calc(100vh - 100px)", // Adjust this as needed
    overflowY: "scroll",
    width: "67%",
    position: "sticky",
  },
}));
const ChartAndFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MKBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
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
            width: { xs: "100%", sm: "100%", md: "100%", lg: "67%" },
          }}
        >
          <BarChart />
          <Card sx={{ padding: "10px", marginTop: "20px" }}>
            <MKBox style={{ padding: "5px" }}>
              <Typography variant="h5">Open Interest - Aug & Sep Expiries</Typography>
            </MKBox>
            <hr />
            <MonthlyRainfallChart />
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
