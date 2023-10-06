// actions.js
import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const loginRequest = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios
    .post("http://192.168.1.7/Account/Login", {
      UserName: username,
      Password: password,
    })
    .then((response) => {
      if (response.data.status === 0) {
        dispatch(loginSuccess(response.data.respmsg));
        console.log(response.data.respmsg);
      } else {
        dispatch(loginFailure(response.data.respmsg));
        console.log(response.data.respmsg);
      }
    })
    .catch((err) => console.log(err));
};

export const loginSuccess = (success) => ({
  type: LOGIN_SUCCESS,
  success,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const response = await axios.post(`http://192.168.1.7/Account/RegisterUser`, userData);

    if (response.status !== 200) {
      dispatch(registerFailure("Network response was not ok"));
      console.log(response.data);
    } else {
      // Check if the response is not JSON (e.g., plain text or HTML)
      if (response.headers["content-type"].indexOf("application/json") === -1) {
        // Handle non-JSON response here
        console.log(response.data);

        // You can access response data with response.data
        // For example, if it's plain text:
        // const responseData = await response.text();
        // If it's HTML:
        // const responseData = await response.text();
        // ... Handle responseData as needed
      } else {
        // Handle JSON response here
        // You can access JSON data with response.data
        console.log(response.data);

        dispatch(registerSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);

    dispatch(registerFailure(error.message));
  }
};

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  data,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error,
});
