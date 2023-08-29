import MKBox from "components/MKBox";
import React from "react";
import { Filters } from "./Filters";
import { makeStyles } from "@mui/styles";
import BarChart from "./ChartsSection";
import { Box, Card, Typography } from "@mui/material";
import ChartFooter from "./ChartFooter";
import OpenIntrestes from "./OpenInterestsChart";
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
            <OpenIntrestes />
            <hr />
            <ChartFooter />
          </Card>
        </Box>
      </MKBox>
    </div>
  );
};

export default ChartAndFilter;
