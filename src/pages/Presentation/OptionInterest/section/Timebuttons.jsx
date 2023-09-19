import { Stack } from "@mui/material";
import { makingReqforTimeIntData } from "Redux/RealActions";
import { get5MInData } from "Redux/action";
import MKButton from "components/MKButton";
import React from "react";
import { useDispatch } from "react-redux";

const Timebuttons = () => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2}>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData);
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
        Last 2hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 3hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Full day
      </MKButton>
    </Stack>
  );
};

export default Timebuttons;
