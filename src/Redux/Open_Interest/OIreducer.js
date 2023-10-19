import {
  GET_REQ_OI_NSE_DATA_SUCCESS,
  GET_TIME_BASED_DATA,
  RESET_SETTINGS,
  SET_SYMBOL,
  SHOW_CURRENT_MONTH_DATA,
  SHOW_NEXT_MONTH_DATA,
} from "./OIAction";
export const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  strikePrice: [],
  timeBasedstrikePrice: [],
  recentTwomonth: [],
  timeBasedrecentTwomonth: [],
  ulValue: 0,
  timeulValue: 0,
  currentMonthselementsAroundClosest: [],
  timeBasedcurrentMonthselementsAroundClosest: [],
  nextMonthselementsAroundClosest: [],
  timeBasednextMonthselementsAroundClosest: [],
  currentMonthClosestElement: [],
  timeBasedcurrentMonthClosestElement: [],
  currentMonth: true,
  nextMonth: true,
  symbol: 1,
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const currentDate = new Date();
const currentMonthName = currentDate.getMonth();

export const oiReducer = (state = initialState, { type, payload, count }) => {
  switch (type) {
    case GET_REQ_OI_NSE_DATA_SUCCESS: {
      console.log(currentMonthName);
      console.log(payload);
      const ulValue = payload[0][0].cE_underlyingValue;
      console.log(ulValue);
      const currentMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthName] && months[currentMonthName + 1])
      );
      console.log(currentMonth);
      const nextMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthName + 1] && months[currentMonthName + 2])
      );
      console.log(nextMonth);
      const currentMonthClosestElement = currentMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });
      console.log(currentMonthClosestElement);
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
      console.log(uniqueStrikePrices);
      const nextMonthClosestElement = nextMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });

      const nextMonthindex = nextMonth.indexOf(nextMonthClosestElement);

      const nextMonthStartindex = Math.max(0, nextMonthindex - 5);
      const nextMonthEndindex = Math.min(nextMonth.length - 1, nextMonthindex + 5);
      const nextMonthselementsAroundClosest = nextMonth.slice(
        nextMonthStartindex,
        nextMonthEndindex + 1
      );

      return {
        ...state,
        recentTwomonth: currentMonthselementsAroundClosest,
        currentMonthselementsAroundClosest: currentMonthselementsAroundClosest,
        nextMonthselementsAroundClosest: nextMonthselementsAroundClosest,
        strikePrice: uniqueStrikePrices,
        ulValue: ulValue,
        currentMonthClosestElement: currentMonthClosestElement,
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
    case SET_SYMBOL: {
      return {
        ...state,
        symbol: payload,
      };
    }
    case RESET_SETTINGS: {
      return {
        ...state,
        symbol: 1,
        currentMonth: true,
        nextMonth: true,
      };
    }
    case GET_TIME_BASED_DATA: {
      console.log(payload);
      const ulValue = payload[1][0].cE_underlyingValue;
      console.log(ulValue);
      const currentMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthName] && months[currentMonthName + 1])
      );
      console.log(currentMonth);
      const nextMonth = payload[0].filter((el) =>
        el.cE_expiryDate.includes(months[currentMonthName + 1] && months[currentMonthName + 2])
      );
      console.log(nextMonth);
      const currentMonthClosestElement = currentMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });
      console.log(currentMonthClosestElement);
      const currentMonthIndex = currentMonth.indexOf(currentMonthClosestElement);
      const currentMontstartIndex = Math.max(0, currentMonthIndex - 5);
      const currentMontendIndex = Math.min(currentMonth.length - 1, currentMonthIndex + 5);
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
      console.log(uniqueStrikePrices);
      const nextMonthClosestElement = nextMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });

      const nextMonthindex = nextMonth.indexOf(nextMonthClosestElement);

      const nextMonthStartindex = Math.max(0, nextMonthindex - 5);
      const nextMonthEndindex = Math.min(nextMonth.length - 1, nextMonthindex + 5);
      const nextMonthselementsAroundClosest = nextMonth.slice(
        nextMonthStartindex,
        nextMonthEndindex + 1
      );
      console.log(nextMonthselementsAroundClosest);

      return {
        ...state,
        timeBasedrecentTwomonth: currentMonthselementsAroundClosest,
        timeBasedcurrentMonthselementsAroundClosest: currentMonthselementsAroundClosest,
        timeBasednextMonthselementsAroundClosest: nextMonthselementsAroundClosest,
        timeBasedstrikePrice: uniqueStrikePrices,
        timeulValue: ulValue,
        timeBasedcurrentMonthClosestElement: currentMonthClosestElement,
      };
    }
    default:
      return state;
  }
};
