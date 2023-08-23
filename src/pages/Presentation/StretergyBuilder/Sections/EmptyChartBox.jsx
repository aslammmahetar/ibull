import { Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";

const EmptyChartBox = () => {
  return (
    <>
      <MKBox style={{ backgroundColor: "#FDFFFC", padding: 5, borderRadius: 5, height: "300px" }}>
        <Typography fontSize={"medium"}>Empty Chart Box</Typography>
      </MKBox>
      <MKBox
        style={{ backgroundColor: "#FDFFFC", padding: 5, borderRadius: 5, height: "50px" }}
      ></MKBox>
    </>
  );
};

export default EmptyChartBox;
