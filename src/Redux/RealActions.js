import { default as axios } from "axios";
export const GET_REQ_NSE_DATA = "GET_REQ_NSE_DATA";
export const GET_REQ_NSE_SUCCESS = "GET_REQ_NSE_SUCCESS";
export const GET_REQ_NSE_FAILS = "GET_REQ_NSE_FAILS";

//
export const GET_NIFTY_EXPIRYDATES = "GET_NIFTY_EXPIRYDATES";
export const GET_NIFTY_EXPIRYDATES_SUCCESS = "GET_NIFTY_EXPIRYDATES_SUCCESS";
export const GET_NIFTY_EXPIRYDATES_FAIL = "GET_NIFTY_EXPIRYDATES_FAIL";

// data with time limit
export const GET_REQ_DATA_WITH_TIME_INT = "GET_REQ_DATA_WITH_TIME_INT";
export const GET_REQ_DATA_WITH_TIME_INT_SUCCESS = "GET_REQ_DATA_WITH_TIME_INT_SUCCESS";
export const GET_REQ_DATA_WITH_TIME_INT_FAILS = "GET_REQ_DATA_WITH_TIME_INT_FAILS";

// limited data
export const SHOW_LESS_THAN_ATM_DATA = "SHOW_LESS_THAN_ATM_DATA";
export const SHOW_GREATER_THAN_ATM_DATA = "SHOW_GREATER_THAN_ATM_DATA";

//get data stream wise
export const GET_REQ_STREAM_WISE = "GET_REQ_STREAM_WISE";
export const GET_REQ_STREAM_WISE_SUCCESS = "GET_REQ_STREAM_WISE_SUCCESS";
export const GET_REQ_STREAM_WISE_FAILURE = "GET_REQ_STREAM_WISE_FAILURE";

export const SHOW_CURRENT_MONTH_DATA = "SHOW_CURRENT_MONTH_DATA";
export const SHOW_NEXT_MONTH_DATA = "SHOW_NEXT_MONTH_DATA";

export const SHOW_TIME_ALERT = "SHOW_TIME_ALERT";

const getNseData = () => {
  return { type: GET_REQ_NSE_DATA };
};

const getNseSuccess = (payload, count) => {
  return { type: GET_REQ_NSE_SUCCESS, payload: payload, count: count };
};

const getNseFails = () => {
  return { type: GET_REQ_NSE_FAILS };
};

export const makingReqforNSE =
  (count, symbol = 1) =>
  (dispatch) => {
    dispatch(getNseData()); // Dispatch the action function
    axios
      .get(`http://192.168.1.6/NSE/GetAllNSEDataBySym?interval=-15&symbol=${symbol}`)
      .then((res) => {
        console.log(res);
        dispatch(getNseSuccess(res.data, count));
      })
      .catch((err) => dispatch(getNseFails()));
  };

export const getDataWithInt = () => {
  return { type: GET_REQ_DATA_WITH_TIME_INT };
};

export const getDataWithIntSuc = (payload) => {
  return { type: GET_REQ_DATA_WITH_TIME_INT_SUCCESS, payload };
};

export const getDataWithIntFails = () => {
  return { type: GET_REQ_DATA_WITH_TIME_INT_FAILS };
};

export const makingReqforTimeIntData = (interval, symbol) => (dispatch) => {
  dispatch(getDataWithInt());
  axios
    .get(`http://192.168.1.6/NSE/GetAllNSEDataBySym?interval=${interval}&symbol=${symbol}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getExpiryDateSuc = (payload) => {
  return { type: GET_NIFTY_EXPIRYDATES_SUCCESS, payload };
};

export const getNIFTYExpiryDate = (symbol) => (dispatch) => {
  axios
    .get(`http://192.168.1.6/NSE/GetAllExpiries?symbol=${symbol}`)
    .then((res) => {
      dispatch(getExpiryDateSuc(res.data));
    })
    .catch((err) => console.log(err));
};

export const getLessThanATMData = (payload) => {
  return { type: SHOW_LESS_THAN_ATM_DATA, payload };
};

export const getGreaterThanATMData = (payload) => {
  return { type: SHOW_GREATER_THAN_ATM_DATA, payload };
};

export const showCurrentMonthData = () => {
  return { type: SHOW_CURRENT_MONTH_DATA };
};

export const showNextMonthData = () => {
  return { type: SHOW_NEXT_MONTH_DATA };
};

export const showTimeAlert = (payload) => {
  return { type: SHOW_TIME_ALERT, payload };
};
