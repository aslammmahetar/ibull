import {
  GET_NIFTY_EXPIRYDATES_SUCCESS,
  GET_REQ_NSE_DATA,
  GET_REQ_NSE_FAILS,
  GET_REQ_NSE_SUCCESS,
  SHOW_LESS_THAN_ATM_DATA,
} from "./RealActions";

const initialState = {
  isLoading: false,
  data: [],
  strikePrices: [],
  isError: false,
  twoMonthData: [],
  columnCount: 0,
  ulValue: 0,
  expiryDates: [],
  limitedData: false,
  lessThanATM: 0,
};

export const realReducer = (state = initialState, { type, payload, count }) => {
  switch (type) {
    case GET_NIFTY_EXPIRYDATES_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        expiryDates: payload,
      };
    }
    case GET_REQ_NSE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_REQ_NSE_SUCCESS: {
      console.log(payload, count);
      // const septData = payload.filter((item) => item.cE_expiryDate.includes("Sep"));
      // const octData = payload.filter((item) => item.cE_expiryDate.includes("Oct"));
      // const twoMonthData = [...septData, ...octData];
      // let twoMonthStrikePrice = [];
      // for (let i = 0; i < twoMonthData.length; i++) {
      //   twoMonthStrikePrice.push(twoMonthData[i].cE_strikePrice);
      // }
      const ulValue = payload[0].cE_underlyingValue;
      console.log(ulValue);
      return {
        ...state,
        isLoading: false,
        // strikePrices: twoMonthStrikePrice.slice(0, count),
        data: payload,
        // twoMonthData: [...septData, ...octData].slice(0, count),
        ulValue: ulValue,
      };
    }
    case GET_REQ_NSE_FAILS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SHOW_LESS_THAN_ATM_DATA: {
      return {
        ...state,
        limitedData: true,
        lessThanATM: payload,
      };
    }
    default:
      return state;
  }
};
