// reducer.js

import { GET_EXPIRYDATES_SUCCESS } from "Redux/OptionChainPage/ocAction";
import {
  ADD_SELECTED_CE_STRIKE,
  ADD_SELECTED_PE_STRIKE,
  MAKE_GROUP,
  GET_SERIES,
  REMOVE_SELECTED_CE_STRIKE,
  REMOVE_SELECTED_PE_STRIKE,
  SET_DISPLAY_LINES,
  SET_SELECT_ALL,
  TOGGLE_CE_CHECKBOX,
  DEFAULT_GROUP,
  DEFAULT_STRIKE,
  GET_MS_OI_SUCCESS,
  SET_SYMBOL,
  DELETE_GROUP,
} from "./MSAction";

const initialState = {
  data: [],
  ulValue: 0,
  expiryDates: [],
  symbol: 1,
  selected_CE_StrikePrices: [],
  selected_PE_StrikePrices: [],
  groups: [],
  defaultGroup: true,
  displayLineNamesArray: [],
  defaltStrikes: [],
  lineVisibilities: {},
  currentMonthClosestElement: null,
};
const months = [
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

const currentDate = new Date();
const currentMonthName = currentDate.getMonth();

export const MSreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MS_OI_SUCCESS: {
      const ulValue = action.payload[0][0].cE_underlyingValue;
      console.log(action);
      const currentMonth = action.payload[0].filter((el) =>
        el.cE_expiryDate.includes(
          months[currentMonthName] && months[currentMonthName + 1]
        )
      );
      console.log(currentMonth);
      const nextMonth = action.payload[0].filter((el) =>
        el.cE_expiryDate.includes(
          months[currentMonthName + 1] && months[currentMonthName + 2]
        )
      );
      console.log(nextMonth);
      const currentMonthClosestElement = currentMonth.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - ulValue);
        const currDiff = Math.abs(curr.cE_strikePrice - ulValue);
        return prevDiff < currDiff ? prev : curr;
      });
      return {
        ...state,
        ulValue: ulValue,
        data: action.payload[0],
        currentMonthClosestElement: currentMonthClosestElement,
      };
    }
    case GET_EXPIRYDATES_SUCCESS: {
      return {
        ...state,
        expiryDates: action.payload,
      };
    }
    case SET_SYMBOL: {
      console.log(action.value);
      return {
        ...state,
        symbol: action.value,
      };
    }
    case ADD_SELECTED_CE_STRIKE:
      return {
        ...state,
        selected_CE_StrikePrices: [
          ...state.selected_CE_StrikePrices,
          action.payload,
        ],
      };
    case REMOVE_SELECTED_CE_STRIKE:
      console.log(state.selected_CE_StrikePrices);
      return {
        ...state,
        selected_CE_StrikePrices: state.selected_CE_StrikePrices.filter(
          (price) => price.CEchecked !== action.payload.CEchecked
        ),
      };
    case ADD_SELECTED_PE_STRIKE: {
      return {
        ...state,
        selected_PE_StrikePrices: [
          ...state.selected_PE_StrikePrices,
          action.payload,
        ],
      };
    }
    case REMOVE_SELECTED_PE_STRIKE: {
      return {
        ...state,
        selected_PE_StrikePrices: state.selected_PE_StrikePrices.filter(
          (price) => price.PEchecked !== action.payload.PEchecked
        ),
      };
    }
    case MAKE_GROUP: {
      return {
        ...state,
        groups: [...state.groups, action.payload],
        selected_CE_StrikePrices: [],
        selected_PE_StrikePrices: [],
      };
    }
    case DELETE_GROUP: {
      return {
        ...state,
        groups: state.groups.filter((el, index) => index !== action.payload),
      };
    }
    case SET_DISPLAY_LINES:
      return {
        ...state,
        displayLines: action.payload,
      };
    case SET_SELECT_ALL:
      return {
        ...state,
        selectAll: action.payload,
      };
    case GET_SERIES: {
      console.log(action);
      return {
        ...state,
        displayLineNamesArray: action.payload.displayLineNamesArray,
      };
    }
    case TOGGLE_CE_CHECKBOX: {
      console.log(action.payload.e);
      return {
        ...state,
        CEselectedStrike: action.payload.e,
        ceCheckBocx: action.payload.payload,
      };
    }
    case DEFAULT_GROUP: {
      return {
        ...state,
        defaultGroup: action.payload,
      };
    }
    case DEFAULT_STRIKE: {
      return {
        ...state,
        defaltStrikes: action.payload,
      };
    }
    default:
      return state;
  }
};
