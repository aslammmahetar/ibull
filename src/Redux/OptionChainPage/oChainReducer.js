import moment from "moment";
import {
  ALL_COLUMN_VIEW_ACTION_TYPE,
  FONTSIZE_CHANGE,
  GET_EXPIRYDATES_SUCCESS,
  GET_GREATER_THAN_ATM_OC,
  GET_LESS_THAN_ATM_OC,
  GET_REQ_OPTION_CHAIN_DATA,
  GET_REQ_OPTION_CHAIN_DATA_SUCCESS,
  GREEK_VIEW_ACTION_VIEW,
  LTP_VIEW_ACTION_TYPE,
  SET_CALL_MAX_OI,
  SET_CLOSEST_ELEMENT,
  SET_FILTERED_DATA,
  SET_PUT_MAX_OI,
  SET_SYMBOL,
  TOGGLE_COLUMN,
} from "./ocAction";

// Reducer code remains the same, using the modified action type
const initialState = {
  data: [],
  filteredData: [],
  callMax: 0,
  putMax: 0,
  closestElement: {},
  symbol: 1,
  originalData: [],
  expiryDates: [],
  ulValue: 0,
  isLoading: false,
  isError: false,
  lessThanATM: 40,
  greaterThanATM: 40,
  gamma: false,
  vega: false,
  theta: false,
  delta: false,
  volume: false,
  oiChange: false,
  oiChangePer: false,
  OI_lakh: false,
  bidprice: false,
  offerPrice: false,
  intrValFut: false,
  intrValSpot: false,
  timeValue: false,
  LTP: false,
  IV: false,
  columnCount: 13,
  fontSize: "small",
};

export const OptionChainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPIRYDATES_SUCCESS: {
      const expiryDates = action.payload.map(
        (el) => (el = moment(el.expiryDates).format("DD-MMM-YYYY"))
      );
      return {
        ...state,
        expiryDates: expiryDates,
      };
    }
    case GET_REQ_OPTION_CHAIN_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_REQ_OPTION_CHAIN_DATA_SUCCESS: {
      console.log(action.payload);
      const ulValue =
        action.payload[0][0].cE_underlyingValue === 0
          ? action.payload[0][0].pE_underlyingValue
          : action.payload[0][0].cE_underlyingValue;
      console.log(ulValue);
      return {
        ...state,
        isLoading: false,
        data: action.payload[0],
        ulValue: ulValue,
      };
    }
    case LTP_VIEW_ACTION_TYPE: {
      return {
        ...state,
        oiChangePer: true,
        OI_lakh: true,
        LTP: true,
        gamma: false,
        vega: false,
        theta: false,
        delta: false,
        volume: false,
        oiChange: false,
        bidprice: false,
        offerPrice: false,
        intrValFut: false,
        intrValSpot: false,
        timeValue: false,
        IV: false,
        columnCount: 3,
      };
    }
    case ALL_COLUMN_VIEW_ACTION_TYPE: {
      return {
        ...state,
        oiChangePer: true,
        OI_lakh: true,
        LTP: true,
        gamma: true,
        vega: true,
        theta: true,
        delta: true,
        volume: true,
        oiChange: true,
        bidprice: true,
        offerPrice: true,
        intrValFut: true,
        intrValSpot: true,
        timeValue: true,
        IV: true,
        columnCount: 14,
      };
    }
    case GREEK_VIEW_ACTION_VIEW: {
      return {
        ...state,
        gamma: true,
        vega: true,
        theta: true,
        delta: true,
        volume: false,
        oiChange: false,
        oiChangePer: false,
        OI_lakh: true,
        bidprice: false,
        offerPrice: false,
        intrValFut: false,
        intrValSpot: false,
        timeValue: false,
        LTP: true,
        IV: true,
        columnCount: 6,
      };
    }
    case TOGGLE_COLUMN: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    }
    case FONTSIZE_CHANGE: {
      return {
        ...state,
        fontSize: action.payload,
      };
    }
    case SET_FILTERED_DATA:
      console.log(action.data);
      return {
        ...state,
        filteredData: action.data,
      };
    case SET_CALL_MAX_OI:
      return {
        ...state,
        callMax: action.value,
      };
    case SET_PUT_MAX_OI:
      return {
        ...state,
        putMax: action.value,
      };
    case SET_CLOSEST_ELEMENT:
      return {
        ...state,
        closestElement: action.element,
      };
    case SET_SYMBOL:
      return {
        ...state,
        symbol: action.value,
      };
    // case SET_ORIGINAL_DATA:
    //   console.log(action.data);
    //   return {
    //     ...state,
    //     originalData: action.data,
    //   };
    // case SET_CLOSEST_AND_NEARBY_ELEMENTS: {
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    // }
    case GET_LESS_THAN_ATM_OC: {
      console.log(action.payload);
      const closestIndex = state.originalData.indexOf(state.closestElement);
      const startIndex = Math.max(0, closestIndex - action.payload);
      const endIndex = Math.min(
        state.originalData.length - 1,
        closestIndex + state.greaterThanATM
      );

      const elementsAroundClosest = state.originalData.slice(
        startIndex,
        endIndex + 1
      );
      console.log(elementsAroundClosest);
      return {
        ...state,
        lessThanATM: action.payload,
      };
    }

    case GET_GREATER_THAN_ATM_OC: {
      console.log(action.payload);
      return {
        ...state,
        greaterThanATM: action.payload,
      };
    }
    default:
      return state;
  }
};
