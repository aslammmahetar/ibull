import axios from "axios";

export const GET_REQ = "GET_REQ";
export const GET_REQ_SUC = "GET_REQ_SUC";
export const GET_REQ_FAILS = "GET_REQ_FAILS";
export const CURRENT_MONTH_DATA = "CURRENT_MONTH_DATA";
export const NEXT_MONTH_DATA = "NEXT_MONTH_DATA";

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
  axios.get("http://localhost:3000/filtered").then((res) => console.log(res.data));
};

//
export const toggleWithCurrentMonth = () => {
  return { type: CURRENT_MONTH_DATA };
};

export const toggleWithNextMonth = () => {
  return { type: NEXT_MONTH_DATA };
};
