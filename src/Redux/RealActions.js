import { default as axios } from "axios";

export const GET_REQ_NSE_DATA = "GET_REQ_NSE_DATA";
export const GET_REQ_NSE_SUCCESS = "GET_REQ_NSE_SUCCESS";
export const GET_REQ_NSE_FAILS = "GET_REQ_NSE_FAILS";

const getNseData = () => {
  return { type: GET_REQ_NSE_DATA };
};

const getNseSuccess = (payload) => {
  return { type: GET_REQ_NSE_SUCCESS, payload };
};

const getNseFails = () => {
  return { type: GET_REQ_NSE_FAILS };
};

export const makingReqforNSE = (dispatch) => {
  dispatch(getNseData()); // Dispatch the action function
  axios
    .get("http://192.168.1.4/NSE/GetAllNSEDataByExp?timeStamp=2023-09-15%2015:25:00&interval=-10")
    .then((res) => dispatch(getNseSuccess(res.data)))
    .catch((err) => dispatch(getNseFails()));
};
