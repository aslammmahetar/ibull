import moment from "moment";
import {
  GET_NIFTY_EXPIRYDATES_SUCCESS,
  GET_REQ_NSE_DATA,
  GET_REQ_NSE_FAILS,
  GET_REQ_NSE_SUCCESS,
  SHOW_CURRENT_MONTH_DATA,
  SHOW_GREATER_THAN_ATM_DATA,
  SHOW_LESS_THAN_ATM_DATA,
  SHOW_NEXT_MONTH_DATA,
  SHOW_TIME_ALERT,
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
  currentMonth: true,
  nextMonth: true,
  timeAlert: "",
};

export const realReducer = (state = initialState, { type, payload, count }) => {
  switch (type) {
    case GET_NIFTY_EXPIRYDATES_SUCCESS: {
      const expiryDates = payload.map((el) => (el = moment(el.expiryDates).format("DD-MMM-YYYY")));

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
      const ulValue = payload[0].cE_underlyingValue;
      const septData = payload.filter((el) => el.cE_expiryDate.includes("Sep"));
      const octData = payload.filter((el) => el.cE_expiryDate.includes("Oct"));

      let twoMonthStrikePrice = payload.map((el) => el.cE_strikePrice);
      return {
        ...state,
        isLoading: false,
        strikePrices: twoMonthStrikePrice.slice(0, count),
        data: payload,
        twoMonthData: [...septData, ...octData],
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
    case SHOW_CURRENT_MONTH_DATA: {
      return {
        ...state,
        currentMonth: !state.currentMonth,
      };
    }
    case SHOW_NEXT_MONTH_DATA: {
      return {
        ...state,
        nextMonth: !state.nextMonth,
      };
    }
    case SHOW_TIME_ALERT: {
      return {
        ...state,
        timeAlert: payload,
      };
    }
    default:
      return state;
  }
};
