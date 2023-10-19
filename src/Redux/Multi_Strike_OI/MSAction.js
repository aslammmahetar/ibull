// actions.js

import axios from "axios";

// Define action types
export const ADD_SELECTED_CE_STRIKE = "ADD_SELECTED_CE_STRIKE";
export const REMOVE_SELECTED_CE_STRIKE = "REMOVE_SELECTED_CE_STRIKE";
export const ADD_SELECTED_PE_STRIKE = "ADD_SELECTED_PE_STRIKE";
export const REMOVE_SELECTED_PE_STRIKE = "REMOVE_SELECTED_PE_STRIKE";
export const MAKE_GROUP = "MAKE_GROUP";
export const SET_DISPLAY_LINES = "SET_DISPLAY_LINES";
export const SET_SELECT_ALL = "SET_SELECT_ALL";
export const GET_SERIES = "GET_SERIES";
export const TOGGLE_CE_CHECKBOX = "TOGGLE_CE_CHECKBOX";
export const DEFAULT_GROUP = "DEFAULT_GROUP";
export const DEFAULT_STRIKE = "DEFAULT_STRIKE";

export const GET_MS_OI = "GET_MS_OI";
export const GET_MS_OI_SUCCESS = "GET_MS_OI_SUCCESS";
export const GET_MS_OI_FAILURE = "GET_MS_OI_FAILURE";
export const GET_EXPIRY_SUCCESS = "GET_EXPIRY_SUCCESS";
// Action creators
const api = process.env.REACT_APP_API_URL;
export const getMSOIreq = () => {
  return { type: GET_MS_OI };
};

export const getMSoiSucc = (payload) => {
  return { type: GET_MS_OI_SUCCESS, payload };
};

export const getMSoiFail = () => {
  return { type: GET_MS_OI_FAILURE };
};
export const getExpirySuc = (payload) => {
  return { type: GET_EXPIRY_SUCCESS, payload };
};

export const getMSExpry =
  (symbol = 1) =>
  (dispatch) => {
    axios
      .get(`${api}NSE/GetAllExpiries?symbol=${symbol}`)
      .then((res) => dispatch(getExpirySuc(res.data)))
      .catch((err) => console.log(err));
  };

export const getMSoiData =
  (symbol = 1) =>
  (dispatch) => {
    console.log(symbol);
    dispatch(getMSOIreq());
    axios
      .get(`${api}NSE/GetAllNSEDataBySym?interval=-15&symbol=${symbol}`)
      .then((res) => dispatch(getMSoiSucc(res.data)))
      .catch((err) => console.log(err));
  };

export const SET_SYMBOL = "SET_SYMBOL";

export const setMSSymbol = (value) => {
  console.log(value);
  return {
    type: SET_SYMBOL,
    value,
  };
};

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

export const getSeries = (displayLineNamesArray) => {
  return { type: GET_SERIES, payload: { displayLineNamesArray } };
};

export const lineSeries = (strikePrices, displayLineNamesArray, symbol) => (dispach) => {
  console.log(strikePrices);
  console.log(symbol);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    strikePrices: strikePrices,
    symbol: symbol,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${api}NSE/GetAllNSEDataBySP`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("result,", result);
      const oi = result.map((el) => el);
      console.log(oi);
      const st = oi.map((el) => el.map((el) => el.cE_openInterest));
      console.log(st);
      const updatedDisplayLineNamesArray = displayLineNamesArray.map((el, index) => ({
        ...el,
        data: st[index],
      }));
      console.log(updatedDisplayLineNamesArray);
      dispach(getSeries(updatedDisplayLineNamesArray));
    })
    .catch((error) => console.log("error", error));
};

export const toggleCEcheckBox = (payload, e) => {
  console.log(payload, e);
  return { type: TOGGLE_CE_CHECKBOX, payload: { payload, e } };
};

export const selectDefaultGroup = (payload) => {
  return { type: DEFAULT_GROUP, payload };
};

export const defaultStrike = (payload) => {
  return { type: DEFAULT_STRIKE, payload };
};

export const defaultStrikesToShow = (strikePrices, symbol, displayLineNamesArray) => (dispach) => {
  var myHeaders = new Headers();
  console.log(displayLineNamesArray);
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    strikePrices: strikePrices,
    symbol: symbol,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${api}NSE/GetAllNSEDataBySP`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("result,", result);
      const oi = result.map((el) => el);
      console.log(oi.length);
      const st = oi.map((el, index) =>
        el.map((el) => (index !== 0 ? el.pE_openInterest : el.cE_openInterest))
      );
      console.log(st);
      const updatedDisplayLineNamesArray = displayLineNamesArray.map((el, index) => ({
        ...el,
        data: st[index],
      }));
      console.log(updatedDisplayLineNamesArray);
      dispach(defaultStrike(updatedDisplayLineNamesArray));
    })
    .catch((error) => console.log("error", error));
};

export const DELETE_GROUP = "DELETE_GROUP";

export const deleteGroup = (payload) => {
  return { type: DELETE_GROUP, payload };
};
