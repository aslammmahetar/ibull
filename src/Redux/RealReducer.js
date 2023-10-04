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
  currentMonthselementsAroundClosest: [],
  nextMonthselementsAroundClosest: [],
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
      console.log(payload[0]);
      console.log(count);
      const data = payload[0];
      const ulValue = payload[0][0].pE_underlyingValue;
      console.log(ulValue);
      const currentMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthname] && months[currentMonthname + 1])
      );
      console.log(currentMonth);
      const nextMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthname + 1] && months[currentMonthname + 2])
      );
      console.log(nextMonth);
      // const firstTwhoMonthData = [...currentMonth, ...nextMonth];
      const currentMonthClosestElement = currentMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });
      const currentMonthIndex = currentMonth.indexOf(currentMonthClosestElement);
      const currentMontstartIndex = Math.max(0, currentMonthIndex - count);
      const currentMontendIndex = Math.min(currentMonth.length - 1, currentMonthIndex + count);
      const currentMonthselementsAroundClosest = currentMonth.slice(
        currentMontstartIndex,
        currentMontendIndex + 1
      );
      const strikePriceArray = currentMonthselementsAroundClosest.map((el) => el.cE_strikePrice);
      const uniqueStrikePrices = [];

      strikePriceArray.forEach((strikePrice, index) => {
        if (strikePriceArray.indexOf(strikePrice) === index) {
          uniqueStrikePrices.push(strikePrice);
        } else {
          uniqueStrikePrices.push("");
        }
      });

      console.log(currentMonthselementsAroundClosest);

      const nextMonthClosestElement = nextMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });

      const nextMonthindex = nextMonth.indexOf(nextMonthClosestElement);

      const nextMonthStartindex = Math.max(0, nextMonthindex - count);
      const nextMonthEndindex = Math.min(nextMonth.length - 1, nextMonthindex + count);
      const nextMonthselementsAroundClosest = nextMonth.slice(
        nextMonthStartindex,
        nextMonthEndindex + 1
      );
      console.log(nextMonthselementsAroundClosest);
      return {
        ...state,
        isLoading: false,
        strikePrices: uniqueStrikePrices,
        data: data,
        twoMonthData: currentMonthselementsAroundClosest,
        currentMonthselementsAroundClosest: currentMonthselementsAroundClosest,
        nextMonthselementsAroundClosest: nextMonthselementsAroundClosest,
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
