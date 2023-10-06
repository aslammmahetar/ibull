import MKBox from "components/MKBox";
import React from "react";
import MSfilters from "./MSfilters";
import { Box, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

import SolarEmploymentChart from "./MultiStrikeOIChart";
import LineChart from "../Charts/LineChart";
const useStyles = makeStyles((theme) => ({
  chartContainer: {
    width: "67%",
  },
}));
const MSChartAndFilters = ({ data }) => {
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
          justifyContent: "space-around",
        }}
      >
        <MSfilters />
        <Box
          sx={{
            marginTop: "10px",
            width: "100%",
          }}
        >
          <Card sx={{ padding: "10px" }}>
            <SolarEmploymentChart data={data} />
            <hr />
          </Card>
        </Box>
      </MKBox>
    </div>
  );
};

export default MSChartAndFilters;
