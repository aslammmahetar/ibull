import moment from "moment";
import {
  GET_NIFTY_EXPIRYDATES_SUCCESS,
  GET_REQ_NSE_DATA,
  GET_REQ_NSE_FAILS,
  GET_REQ_NSE_SUCCESS,
  SHOW_GREATER_THAN_ATM_DATA,
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
  lessThanATM: 40,
  greaterThanATM: 40,
  septData: [],
};

export const realReducer = (state = initialState, { type, payload, count }) => {
  switch (type) {
    case GET_NIFTY_EXPIRYDATES_SUCCESS: {
      const expiryDates = payload.map((el) => (el = moment(el.expiryDates).format("DD-MMM-YYYY")));
      console.log(expiryDates);

      return {
        ...state,
        expiryDates: expiryDates,
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
      const ulValue = payload[0].cE_underlyingValue;
      const septData = payload.filter((el) => el.cE_expiryDate.includes("Sep"));
      const octData = payload.filter((el) => el.cE_expiryDate.includes("Oct"));

      let twoMonthStrikePrice = payload.map((el) => el.cE_strikePrice);
      console.log(twoMonthStrikePrice);
      console.log(ulValue);
      return {
        ...state,
        isLoading: false,
        strikePrices: twoMonthStrikePrice.slice(0, count),
        data: payload,
        twoMonthData: [...septData, ...octData].slice(0, count),
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
    case SHOW_GREATER_THAN_ATM_DATA: {
      return {
        ...state,
        limiitedData: true,
        greaterThanATM: payload,
      };
    }
    default:
      return state;
  }
};
