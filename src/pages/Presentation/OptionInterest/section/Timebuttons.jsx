import { Button } from "@mui/material";
import { get5MInData } from "Redux/action";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import React from "react";
import { useDispatch } from "react-redux";

const Timebuttons = () => {
  const dispatch = useDispatch();

  return (
    <MKBox>
      <MKButton
        onClick={() => {
          dispatch(get5MInData);
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 5 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 10 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 15 Mins{" "}
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 30 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 1hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 1hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 2hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 3hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Full day
      </MKButton>
    </MKBox>
  );
};

export default Timebuttons;
