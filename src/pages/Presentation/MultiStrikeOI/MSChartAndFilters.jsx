import MKBox from "components/MKBox";
import React from "react";
import MSfilters from "./MSfilters";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { BarChart } from "@mui/icons-material";
import OpenIntrestes from "../OptionInterest/section/OpenInterestsChart";
import ChartFooter from "../OptionInterest/section/ChartFooter";
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
const MSChartAndFilters = () => {
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
        <MSfilters />
        <Box
          className={classes.chartContainer}
          width={{ xs: "100%", sm: "100%", md: "67%", lg: "67%" }}
        >
          {/* <BarChart /> */}
          <Card sx={{ padding: "10px" }}>
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

export default MSChartAndFilters;