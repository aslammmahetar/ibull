// actions.js

import axios from "axios";
import e from "cors";

// Define action types
export const ADD_SELECTED_CE_STRIKE = "ADD_SELECTED_CE_STRIKE";
export const REMOVE_SELECTED_CE_STRIKE = "REMOVE_SELECTED_CE_STRIKE";
export const ADD_SELECTED_PE_STRIKE = "ADD_SELECTED_PE_STRIKE";
export const REMOVE_SELECTED_PE_STRIKE = "REMOVE_SELECTED_PE_STRIKE";
export const MAKE_GROUP = "MAKE_GROUP";
export const SET_DISPLAY_LINES = "SET_DISPLAY_LINES";
export const SET_SELECT_ALL = "SET_SELECT_ALL";
export const GET_SERIES = "GET_SERIES";

// Action creators
export const addSelectedCEStrike = (CEstrikeObject) => ({
  type: ADD_SELECTED_CE_STRIKE,
  payload: CEstrikeObject,
});

export const removeSelectedCEStrike = (CEstrikeObject) => ({
  type: REMOVE_SELECTED_CE_STRIKE,
  payload: CEstrikeObject,
});

export const addSelectedPEStrike = (PEstrikeObject) => ({
  type: ADD_SELECTED_PE_STRIKE,
  payload: PEstrikeObject,
});

export const removeSelectedPEStrike = (PEstrikeObject) => ({
  type: REMOVE_SELECTED_PE_STRIKE,
  payload: PEstrikeObject,
});

export const makingGroup = (payload) => {
  return { type: MAKE_GROUP, payload };
};

// actions.js
export const setDisplayLines = (lines) => ({
  type: SET_DISPLAY_LINES,
  payload: lines,
});

export const setSelectAll = (selectAll) => ({
  type: SET_SELECT_ALL,
  payload: selectAll,
});

export const getSeries = (result, displayLineNamesArray) => {
  return { type: GET_SERIES, payload: { result, displayLineNamesArray } };
};

export const lineSeries = (strikePrices, displayLineNamesArray) => (dispach) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    strikePrices: strikePrices,
    symbol: 1,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch("http://192.168.1.7/NSE/GetAllNSEDataBySP", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("result,", result);
      const oi = result.map((el) => el);

      const st = oi.map((el) => el.map((el) => el.cE_openInterest));
      console.log(st);
      const updatedDisplayLineNamesArray = displayLineNamesArray.map((el, index) => ({
        ...el,
        data: st[index],
      }));
      console.log(updatedDisplayLineNamesArray);
      dispach(getSeries(result, updatedDisplayLineNamesArray));
    })
    .catch((error) => console.log("error", error));
};
