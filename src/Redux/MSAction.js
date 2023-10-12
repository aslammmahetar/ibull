// actions.js

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
  fetch("http://192.168.1.6/NSE/GetAllNSEDataBySP", requestOptions)
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

export const defaultGroup = () => {
  return { type: DEFAULT_GROUP };
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
  fetch("http://192.168.1.6/NSE/GetAllNSEDataBySP", requestOptions)
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
      dispach(defaultStrike(updatedDisplayLineNamesArray));
    })
    .catch((error) => console.log("error", error));
};
