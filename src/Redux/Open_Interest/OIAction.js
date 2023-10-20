import axios from "axios";

export const GET_REQ_OI_NSE_DATA = "GET_REQ_NSE_DATA";
export const GET_REQ_OI_NSE_DATA_SUCCESS = "GET_REQ_NSE_DATA_SUCCESS";
export const GET_REQ_OI_NSE_DATA_FAILURE = "GET_REQ_NSE_DATA_FAILURE";

export const SHOW_CURRENT_MONTH_DATA = "SHOW_CURRENT_MONTH_DATA";
export const SHOW_NEXT_MONTH_DATA = "SHOW_NEXT_MONTH_DATA";
export const SET_SYMBOL = "SET_SYMBOL";
export const RESET_SETTINGS = "RESET_SETTINGS";
const api = process.env.REACT_APP_API_URL;
export const getOIdata = () => {
  return { type: GET_REQ_OI_NSE_DATA };
};

export const getOIdataSuccess = (payload, count) => {
  return { type: GET_REQ_OI_NSE_DATA_SUCCESS, payload, count };
};

export const getOIdataFailure = () => {
  return { type: GET_REQ_OI_NSE_DATA_FAILURE };
};

export const getReqOI = (symbol, count) => (dispatch) => {
  dispatch(getOIdata());
  axios
    .get(`${api}NSE/GetAllNSEDataBySym?interval=-15&symbol=${symbol}`)
    .then((res) => dispatch(getOIdataSuccess(res.data, count)))
    .catch((err) => console.log(err));
};
export const showCurrentMonthData = () => {
  return { type: SHOW_CURRENT_MONTH_DATA };
};

export const showNextMonthData = () => {
  return { type: SHOW_NEXT_MONTH_DATA };
};
export const setSymbol = (payload) => {
  return { type: SET_SYMBOL, payload };
};
export const resetSettings = () => {
  return { type: RESET_SETTINGS };
};

export const GET_TIME_BASED_DATA = "GET_TIME_BASED_DATA";

export const getTimeBasedData = (payload) => {
  return { type: GET_TIME_BASED_DATA, payload };
};

export const getDataBasedOnTime = (symbol, interval) => (dispatch) => {
  axios
    .get(`${api}NSE/GetAllNSEDataBySym?interval=${interval}&symbol=${symbol}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
