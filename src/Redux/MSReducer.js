// reducer.js

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
} from "./MSAction";

const initialState = {
  selected_CE_StrikePrices: [],
  selected_PE_StrikePrices: [],
  groups: [],
  defaultGroup: true,
  displayLineNamesArray: [],
  defaltStrikes: [],
  lineVisibilities: {},
};

export const MSreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_CE_STRIKE:
      return {
        ...state,
        selected_CE_StrikePrices: [...state.selected_CE_StrikePrices, action.payload],
      };
    case REMOVE_SELECTED_CE_STRIKE:
      return {
        ...state,
        selected_CE_StrikePrices: state.selected_CE_StrikePrices.filter(
          (price) => price.CEchecked !== action.payload
        ),
      };
    case ADD_SELECTED_PE_STRIKE: {
      return {
        ...state,
        selected_PE_StrikePrices: [...state.selected_PE_StrikePrices, action.payload],
      };
    }
    case REMOVE_SELECTED_PE_STRIKE: {
      return {
        ...state,
        selected_PE_StrikePrices: state.selected_PE_StrikePrices.filter(
          (price) => price.PEchecked !== action.payload
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
        defaultGroup: !state.defaultGroup,
      };
    }
    case DEFAULT_STRIKE: {
      console.log(action);
      return {
        ...state,
        defaltStrikes: action.payload,
      };
    }
    default:
      return state;
  }
};
