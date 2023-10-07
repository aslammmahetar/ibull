// reducer.js

import {
  ADD_SELECTED_CE_STRIKE,
  ADD_SELECTED_PE_STRIKE,
  MAKE_GROUP,
  REMOVE_SELECTED_CE_STRIKE,
  REMOVE_SELECTED_PE_STRIKE,
} from "./MSAction";

const initialState = {
  selected_CE_StrikePrices: [],
  selected_PE_StrikePrices: [],
  groups: [],
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

    default:
      return state;
  }
};
