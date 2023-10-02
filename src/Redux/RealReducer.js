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

// Get today's date
const today = new Date();

// Find the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayOfWeek = today.getDay();

// Calculate the number of days until the next Thursday
const daysUntilNextThursday = (11 - currentDayOfWeek) % 7;

// Calculate the date of the next Thursday by adding the number of days
const nextThursday = new Date(today);
nextThursday.setDate(today.getDate() + daysUntilNextThursday);

// Create an array of month names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Format the date as "dd-mmm-yyyy"
const nearestThurday = `${nextThursday.getDate()}-${
  monthNames[nextThursday.getMonth()]
}-${nextThursday.getFullYear()}`;

const initialState = {
  nearestThurday: nearestThurday,
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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ogu", "Sep", "Oct", "Nov", "Dec"];
const currentDate = new Date();
const currentMonthname = currentDate.getMonth();

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
      console.log(payload);
      const ulValue = payload[0].pE_underlyingValue;
      const octData = payload.filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthname] && months[currentMonthname + 1])
      );
      const novData = payload.filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthname + 1] && months[currentMonthname + 2])
      );

      let twoMonthStrikePrice = payload.map((el) => el.cE_strikePrice);
      return {
        ...state,
        isLoading: false,
        strikePrices: twoMonthStrikePrice.slice(0, count),
        data: payload,
        twoMonthData: [...octData, ...novData],
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
