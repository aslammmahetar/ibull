import { GET_REQ_NSE_DATA, GET_REQ_NSE_FAILS, GET_REQ_NSE_SUCCESS } from "./RealActions";

const initialState = {
  isLoading: false,
  data: [],
  strikePrices: [],
  isError: false,
  twoMonthData: [],
  columnCount: 0,
};

export const realReducer = (state = initialState, { type, payload, count }) => {
  switch (type) {
    case GET_REQ_NSE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_REQ_NSE_SUCCESS: {
      console.log(payload, count);
      const septData = payload.filter((item) => item.cE_expiryDate.includes("Sep"));
      const octData = payload.filter((item) => item.cE_expiryDate.includes("Oct"));
      const twoMonthData = [...septData, ...octData];
      let twoMonthStrikePrice = [];
      for (let i = 0; i < twoMonthData.length; i++) {
        twoMonthStrikePrice.push(twoMonthData[i].cE_strikePrice);
      }
      return {
        ...state,
        isLoading: false,
        strikePrices: twoMonthStrikePrice.slice(0, count),
        data: payload,
        twoMonthData: [...septData, ...octData].slice(0, count),
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
