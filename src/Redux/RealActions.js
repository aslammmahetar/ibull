import { default as axios } from "axios";

export const GET_REQ_NSE_DATA = "GET_REQ_NSE_DATA";
export const GET_REQ_NSE_SUCCESS = "GET_REQ_NSE_SUCCESS";
export const GET_REQ_NSE_FAILS = "GET_REQ_NSE_FAILS";

// data with time limit
export const GET_REQ_DATA_WITH_TIME_INT = "GET_REQ_DATA_WITH_TIME_INT";
export const GET_REQ_DATA_WITH_TIME_INT_SUCCESS = "GET_REQ_DATA_WITH_TIME_INT_SUCCESS";
export const GET_REQ_DATA_WITH_TIME_INT_FAILS = "GET_REQ_DATA_WITH_TIME_INT_FAILS";

const getNseData = () => {
  return { type: GET_REQ_NSE_DATA };
};

const getNseSuccess = (payload, count) => {
  return { type: GET_REQ_NSE_SUCCESS, payload: payload, count: count };
};

const getNseFails = () => {
  return { type: GET_REQ_NSE_FAILS };
};

export const makingReqforNSE = (count) => (dispatch) => {
  dispatch(getNseData()); // Dispatch the action function
  axios
    .get("http://192.168.1.4/NSE/GetAllNSEDataByExp?interval=0")
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

export const makingReqforTimeIntData = (dispatch) => {
  dispatch(getDataWithInt());
  axios
    .get("http://192.168.1.4/NSE/GetAllNSEDataByExp?interval=-120")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

//number of columns

// export const
