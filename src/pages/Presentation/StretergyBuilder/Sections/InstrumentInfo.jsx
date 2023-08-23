import { Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";

const InstrumentInfo = () => {
  return (
    <MKBox style={{ backgroundColor: "#FDFFFC", padding: 5, borderRadius: 5, height: "150px" }}>
      <Typography fontSize={"meduim"} color={"grey"}>
        Summary..
      </Typography>
    </MKBox>
  );
};

export default InstrumentInfo;
