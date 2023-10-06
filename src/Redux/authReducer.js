// reducers.js

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./authAction";

const initialState = {
  loginID: "",
  successMsg: "",
  errorMsg: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginID: action.user,
        successMsg: action.success,
        isAuth: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginID: null,
        error: action.error,
        isAuth: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
