import { GET_REQ, GET_REQ_FAILS, GET_REQ_SUC, CURRENT_MONTH_DATA, NEXT_MONTH_DATA } from "./action";

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

      const septData = modifieddData.filter((item) => item.expiryDate.includes("Sep"));
      console.log(septData);
      const augData = modifieddData.filter((item) => item.expiryDate.includes("Aug"));
      console.log(augData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: modifieddData,
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
    default:
      return state;
  }
};

export default reducer;
