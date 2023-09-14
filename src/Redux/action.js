import axios from "axios";
export const GET_REQ = "GET_REQ";
export const GET_REQ_SUC = "GET_REQ_SUC";
export const GET_REQ_FAILS = "GET_REQ_FAILS";
export const CURRENT_MONTH_DATA = "CURRENT_MONTH_DATA";
export const NEXT_MONTH_DATA = "NEXT_MONTH_DATA";
export const FIVE_MIN_DATA_SUC = "FIVE_MIN_DATA_SUC";
export const FIVE_MIN_DATA_FAIL = "FIVE_MIN_DATA_FAIL";
export const FIVE_MIN_DATA = "FIVE_MIN_DATA";
export const GET_TWO_MONTH_DATA = "GET_TWO_MONTH_DATA";
export const EMPTY_DATA = "EMPTY_DATA";
export const FIRST_MONTH = "FIRST_MONTH";
export const SECOND_MONTH = "SECOND_MONTH";
export const FONTSIZE_CHANGE = "FONTSIZE_CHANGE";

export const getData = () => {
  return { type: GET_REQ };
};

export const getReqSuc = (payload) => {
  return { type: GET_REQ_SUC, payload };
};

export const getReqFails = () => {
  return { type: GET_REQ_FAILS };
};

export const getReq = (dispatch) => {
  dispatch(getData);
  axios
    .get("http://localhost:3000/records")
    .then((res) => dispatch(getReqSuc(res.data)))
    .then((err) => dispatch(getReqFails));
  // axios.get("http://localhost:3000/filtered").then((res) => console.log(res.data));
};

//
export const toggleWithCurrentMonth = () => {
  return { type: CURRENT_MONTH_DATA };
};

export const toggleWithNextMonth = () => {
  return { type: NEXT_MONTH_DATA };
};

export const getFiveMinData = () => {
  return { type: FIVE_MIN_DATA };
};

export const getFiveMinDataSuc = (payload) => {
  return { type: FIVE_MIN_DATA_SUC, payload };
};

export const getFiveMinDataFails = () => {
  return { type: FIVE_MIN_DATA_FAIL };
};

export const getTwoMonthData = () => {
  return { type: GET_TWO_MONTH_DATA };
};

export const emptyData = () => {
  return { type: EMPTY_DATA };
};

export const firstMonth = () => {
  return { type: FIRST_MONTH };
};

export const secondMonth = () => {
  return { type: SECOND_MONTH };
};

export const get5MInData = (dispatch) => {
  dispatch(getFiveMinData);
  axios
    .get("http://localhost:3000/records2")
    .then((res) => dispatch(getFiveMinDataSuc(res.data)))
    .then((err) => dispatch(getFiveMinDataFails));
};

export const fontSizeChange = (payload) => {
  return { type: FONTSIZE_CHANGE, payload: payload };
};
