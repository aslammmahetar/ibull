import { Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import { useSelector } from "react-redux";

const EmptyChartBox = () => {
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);

  return (
    <MKBox
      style={{
        backgroundColor: "#FDFFFC",
        padding: 5,
        borderRadius: 5,
        height: "300px",
        marginTop: 5,
      }}
    >
      <Typography fontSize={"medium"}>Empty Chart Box</Typography>
    </MKBox>
  );
};

export default EmptyChartBox;
