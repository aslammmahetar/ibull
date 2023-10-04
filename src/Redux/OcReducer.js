import {
  ALL_COLUMN_VIEW_ACTION_TYPE,
  GREEK_VIEW_ACTION_VIEW,
  LTP_VIEW_ACTION_TYPE,
} from "./OcAction";

// Reducer code remains the same, using the modified action type
const initialState = {
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
};

export const OptionChainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
};
