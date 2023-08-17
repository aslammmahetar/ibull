import MKBox from "components/MKBox";
import React from "react";
import { Filters } from "./Filters";
import OptionChart from "./OptionChart";
import ChartsSection from "./ChartsSection";
import { Card, Grid, Paper } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  filteration: {
    position: "sticky",
    top: 0,
  },
  chartContainer: {
    maxHeight: "calc(100vh - 100px)", // Adjust this as needed
    overflowY: "scroll",
    width: "67%",
    marginTop: "25px",
  },
}));
const ChartAndFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MKBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          paddingTop: "15px",
          justifyContent: "space-around",
        }}
      >
        <Filters />
        <div className={classes.chartContainer}>
          <ChartsSection />
          <ChartsSection />
          <ChartsSection />
        </div>
      </MKBox>
    </div>
  );
};

export default ChartAndFilter;
