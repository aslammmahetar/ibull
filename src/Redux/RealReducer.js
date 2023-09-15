import { GET_REQ_NSE_DATA, GET_REQ_NSE_FAILS, GET_REQ_NSE_SUCCESS } from "./RealActions";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

export const realReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQ_NSE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_REQ_NSE_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_REQ_NSE_FAILS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
