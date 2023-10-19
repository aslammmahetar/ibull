import { Stack } from "@mui/material";
import { getDataBasedOnTime } from "Redux/Open_Interest/OIAction";
import MKButton from "components/MKButton";
import React from "react";
import { useDispatch } from "react-redux";

const Timebuttons = () => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2}>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -15));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 15 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -30));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 30 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -45));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 45 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -60));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 1hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -120));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 2hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(1, -180));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Last 3hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(getDataBasedOnTime(-180, 1));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D" }}
      >
        Full day
      </MKButton>
    </Stack>
  );
};

export default Timebuttons;
