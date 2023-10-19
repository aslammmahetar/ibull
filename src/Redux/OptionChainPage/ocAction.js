import axios from "axios";

//font size and column view management
export const LTP_VIEW_ACTION_TYPE = "LTP_VIEW";
export const ALL_COLUMN_VIEW_ACTION_TYPE = "All_VIEW";
export const GREEK_VIEW_ACTION_VIEW = "GREEK_VIEW";
export const TOGGLE_COLUMN = "TOGGLE_COLUMN";
export const FONTSIZE_CHANGE = "FONTSIZE_CHANGE";
export const ltpView = () => {
  return { type: LTP_VIEW_ACTION_TYPE, payload: false };
};

const api = process.env.REACT_APP_API_URL;

export const allColumnView = () => {
  return { type: ALL_COLUMN_VIEW_ACTION_TYPE };
};

export const greekView = () => {
  return { type: GREEK_VIEW_ACTION_VIEW };
};

export const toggleColumn = (columnName) => {
  return { type: TOGGLE_COLUMN, payload: columnName };
};

export const fontSizeChange = (payload) => {
  console.log(payload);
  return { type: FONTSIZE_CHANGE, payload: payload };
};

/// request for data source
export const GET_REQ_OPTION_CHAIN_DATA = "GET_REQ_OPTION_CHAIN_DATA";
export const GET_REQ_OPTION_CHAIN_DATA_SUCCESS = "GET_REQ_OPTION_CHAIN_DATA_SUCCESS";
export const GET_REQ_OPTION_CHAIN_DATA_FAILURE = "GET_REQ_OPTION_CHAIN_DATA_FAILURE";

export const getOptionChainData = () => {
  return { type: GET_REQ_OPTION_CHAIN_DATA };
};

export const getOptionChainDataSuccess = (payload) => {
  console.log(payload);
  return { type: GET_REQ_OPTION_CHAIN_DATA_SUCCESS, payload };
};

export const getOptionChainDataFailure = () => {
  return { type: GET_REQ_OPTION_CHAIN_DATA_FAILURE };
};

export const getData =
  (symbol = 1) =>
  (dispatch) => {
    console.log(api);
    dispatch(getOptionChainData()); // Dispatch the action function
    axios
      .get(`${api}NSE/GetAllNSEDataBySym?interval=-15&symbol=${symbol}`)
      .then((res) => {
        console.log(res);
        dispatch(getOptionChainDataSuccess(res.data));
      })
      .catch((err) => dispatch(getOptionChainDataFailure()));
  };

export const GET_EXPIRYDATES_SUCCESS = "GET_EXPIRYDATES_SUCCESS";

export const getExpirySuc = (payload) => {
  return { type: GET_EXPIRYDATES_SUCCESS, payload };
};

export const getExpiry =
  (symbol = 1) =>
  (dispatch) => {
    axios
      .get(`${api}NSE/GetAllExpiries?symbol=${symbol}`)
      .then((res) => dispatch(getExpirySuc(res.data)))
      .catch((err) => console.log(err));
  };
export const SET_FILTERED_DATA = "SET_FILTERED_DATA";
export const SET_CALL_MAX_OI = "SET_CALL_MAX_OI";
export const SET_PUT_MAX_OI = "SET_PUT_MAX_OI";
export const SET_CLOSEST_ELEMENT = "SET_CLOSEST_ELEMENT";
export const SET_SYMBOL = "SET_SYMBOL";
export const SET_ORIGINAL_DATA = "SET_ORIGINAL_DATA";
export const SET_CLOSEST_AND_NEARBY_ELEMENTS = "SET_CLOSEST_AND_NEARBY_ELEMENTS";
export const setFilteredData = (data) => ({
  type: SET_FILTERED_DATA,
  data,
});

export const setCallMaxOI = (value) => ({
  type: SET_CALL_MAX_OI,
  value,
});

export const setPutMaxOI = (value) => ({
  type: SET_PUT_MAX_OI,
  value,
});

export const setClosestElement = (element) => ({
  type: SET_CLOSEST_ELEMENT,
  element,
});

export const setSymbol = (value) => ({
  type: SET_SYMBOL,
  value,
});

export const setOriginalData = (data) => ({
  type: SET_ORIGINAL_DATA,
  data,
});
// export const setClosestAndNearbyElements = (elements) => ({
//   type: SET_CLOSEST_AND_NEARBY_ELEMENTS,
//   payload: elements,
// });
export const updateDataAndCalculate = (store, selectedExpiryDate, ulValue) => {
  return (dispatch) => {
    const filteredData =
      store.length > 0 ? store.filter((item) => item.cE_expiryDate === selectedExpiryDate) : [];

    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;

    for (let el of filteredData) {
      if (CEmaxOI < el.cE_openInterest) {
        CEmaxOI = el.cE_openInterest;
      }
      if (PEmaxOI < el.pE_openInterest) {
        PEmaxOI = el.pE_openInterest;
      }
    }

    dispatch(setCallMaxOI(CEmaxOI));
    dispatch(setPutMaxOI(PEmaxOI));
    dispatch(setFilteredData(filteredData));
    dispatch(setOriginalData(filteredData));

    const targetValue = ulValue;
    let closestElement = null;

    if (filteredData.length > 0) {
      closestElement = filteredData.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.cE_strikePrice - targetValue);
        const currDiff = Math.abs(curr.cE_strikePrice - targetValue);
        return prevDiff < currDiff ? prev : curr;
      });

      dispatch(setClosestElement(closestElement));
    }
  };
};

// export const updateData =
//   (filteredData, closestElement, lessThanATM, greaterThanATM) => (dispatch) => {
//     // Store the old data
//     const oldData = [...filteredData];

//
//     // Dispatch the new data
//     dispatch(setClosestAndNearbyElements(elementsAroundClosest));

//     // Return a function to retrieve the old data
//     console.log(oldData);
//   };

export const GET_LESS_THAN_ATM_OC = "GET_LESS_THAN_ATM_OC";
export const GET_GREATER_THAN_ATM_OC = "GET_GREATER_THAN_ATM_OC";
export const getLessThanATMDataOC = (payload) => {
  return { type: GET_LESS_THAN_ATM_OC, payload };
};

export const getGreaterThanATMOC = (payload) => {
  return { type: GET_GREATER_THAN_ATM_OC, payload };
};
