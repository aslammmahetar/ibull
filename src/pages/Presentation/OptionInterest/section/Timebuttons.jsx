import { Stack } from "@mui/material";
import { makingReqforTimeIntData } from "Redux/RealActions";
import MKButton from "components/MKButton";
import React from "react";
import { useDispatch } from "react-redux";

const Timebuttons = () => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2}>
      {/* <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-5));3        }}
        disabled
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 5 Mins
      </MKButton> */}
      {/* <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-10))3
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 10 Mins
      </MKButton> */}
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-15, 3));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 15 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-30, 3));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 30 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-45, 3));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 45 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-60, 3));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 1hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-120, 31));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 2hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-180, 3));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 3hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(0));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Full day
      </MKButton>
    </Stack>
  );
};

export default Timebuttons;
