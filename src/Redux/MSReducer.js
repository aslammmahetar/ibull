// reducer.js

import {
  ADD_SELECTED_CE_STRIKE,
  ADD_SELECTED_PE_STRIKE,
  REMOVE_SELECTED_CE_STRIKE,
  REMOVE_SELECTED_PE_STRIKE,
} from "./MSAction";

const initialState = {
  selected_CE_StrikePrices: [],
  selected_PE_StrikePrices: [],
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
          (price) => price !== action.payload
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
          (price) => price !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
