import {
  GET_REQ,
  GET_REQ_FAILS,
  GET_REQ_SUC,
  CURRENT_MONTH_DATA,
  NEXT_MONTH_DATA,
  FIVE_MIN_DATA_SUC,
  FIVE_MIN_DATA,
  FIVE_MIN_DATA_FAIL,
} from "./action";

const intialState = {
  isLoading: false,
  isError: false,
  data: [],
  underlyingValue: 0,
  strikePrices: [],
  twoMonthData: [],
  firstMonth: [],
  secondMonth: [],
  currentMonth: true,
  nextMonth: true,
  fiveMinData: [],
  isLoading5: false,
  isError5: false,
};

const modifyData = (data) => {
  const modifieddData = data.map((element) => {
    const combinedCEPE = {};

    for (const key in element.CE) {
      combinedCEPE[`CE_${key}`] = element.CE[key];
    }

    for (const key in element.PE) {
      combinedCEPE[`PE_${key}`] = element.PE[key];
    }

    // Remove original "CE" and "PE" objects
    const { CE, PE, ...rest } = element;

    return {
      ...rest,
      combinedCEPE,
    };
  });
  return modifieddData;
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };
    }

    case GET_REQ_SUC: {
      console.log(payload);
      const strikePricesArry = payload.strikePrices;
      const ulValue = payload.underlyingValue;
      const data = payload.data;
      // console.log(data);
      modifyData(data);
      const septData = modifyData(data).filter((item) => item.expiryDate.includes("Sep"));
      console.log(septData);
      const augData = modifyData(data).filter((item) => item.expiryDate.includes("Aug"));
      console.log(augData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: modifyData(data),
        underlyingValue: ulValue,
        strikePrices: strikePricesArry,
        twoMonthData: [...augData, ...septData],
      };
    }

    case GET_REQ_FAILS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    case CURRENT_MONTH_DATA: {
      const septData = state.data.filter((item) => item.expiryDate.includes("Sep"));
      console.log(septData);
      return {
        ...state,
        currentMonth: !state.currentMonth,
        firstMonth: septData,
      };
    }
    case NEXT_MONTH_DATA: {
      const augData = state.data.filter((item) => item.expiryDate.includes("Aug"));
      console.log(augData);
      return {
        ...state,
        nextMonth: !state.nextMonth,
        secondMonth: augData,
      };
    }

    case FIVE_MIN_DATA: {
      return {
        ...state,
        isLoading5: true,
        isError5: false,
        fiveMinData: [],
      };
    }
    case FIVE_MIN_DATA_FAIL: {
      return {
        ...state,
        isLoading5: false,
        isError5: true,
        fiveMinData: [],
      };
    }
    case FIVE_MIN_DATA_SUC: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
