import MKBox from "components/MKBox";
import React from "react";
import { Filters } from "./Filters";
import { makeStyles } from "@mui/styles";
import LineBarCombinedChart from "./test";
import BarChart from "./ChartsSection";
import { Box } from "@mui/material";
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
          width={{ xs: "100%", sm: "100%", md: "67%", lg: "67%" }}
        >
          <BarChart />
          <LineBarCombinedChart />
        </Box>
      </MKBox>
    </div>
  );
};

export default ChartAndFilter;
