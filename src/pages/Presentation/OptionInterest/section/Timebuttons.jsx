import { Stack } from "@mui/material";
import { makingReqforTimeIntData } from "Redux/RealActions";
import MKButton from "components/MKButton";
import React from "react";
import { useDispatch } from "react-redux";

const Timebuttons = () => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2}>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-5));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 5 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-10));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 10 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-15));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 15 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-30));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 30 Mins
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-60));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 1hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-120));
        }}
        size="small"
        variant="outlined"
        style={{ color: "#16718D", marginLeft: "2px" }}
      >
        Last 2hr
      </MKButton>
      <MKButton
        onClick={() => {
          dispatch(makingReqforTimeIntData(-180));
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
