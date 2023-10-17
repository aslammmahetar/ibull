import MKBox from "components/MKBox";
import React from "react";
import MSfilters from "./MSfilters";
import { makeStyles } from "@mui/styles";

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
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
        style={{
          width: "100%",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <MSfilters />
      </MKBox>
    </div>
  );
};

export default MSChartAndFilters;
