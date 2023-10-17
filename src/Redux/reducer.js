// import {
//   GET_REQ,
//   GET_REQ_FAILS,
//   GET_REQ_SUC,
//   CURRENT_MONTH_DATA,
//   NEXT_MONTH_DATA,
//   GET_TWO_MONTH_DATA,
//   EMPTY_DATA,
//   FIRST_MONTH,
//   SECOND_MONTH,
//   FIVE_MIN_DATA_SUC,
//   FONTSIZE_CHANGE,
// } from "./action";

// const intialState = {
//   isLoading: false,
//   isError: false,
//   data: [],
//   underlyingValue: 0,
//   strikePrices: [],
//   twoMonthData: [],
//   currentMonth: true,
//   nextMonth: true,
//   fiveMinBool: false,
//   fiveMinData: [],
//   nearestStrikePrice: 0,
// };

// const modifyData = (data) => {
//   const modifieddData = data.map((element) => {
//     const combinedCEPE = {};

//     for (const key in element.CE) {
//       combinedCEPE[`CE_${key}`] = element.CE[key];
//     }

//     for (const key in element.PE) {
//       combinedCEPE[`PE_${key}`] = element.PE[key];
//     }

//     // Remove original "CE" and "PE" objects
//     const { CE, PE, ...rest } = element;

//     return {
//       ...rest,
//       combinedCEPE,
//     };
//   });
//   return modifieddData;
// };
// function findNearestStrikePrice(strikePrices, underlyingValue) {
//   let nearestStrikePrice = strikePrices[0]; // Initialize with the first value in the array
//   let minDifference = Math.abs(strikePrices[0] - underlyingValue); // Initialize with the absolute difference

//   for (let i = 1; i < strikePrices.length; i++) {
//     const difference = Math.abs(strikePrices[i] - underlyingValue);

//     if (difference < minDifference) {
//       minDifference = difference;
//       nearestStrikePrice = strikePrices[i];
//     }
//   }
//   return nearestStrikePrice;
// }

// const reducer = (state = intialState, { type, payload }) => {
//   switch (type) {
//     case GET_REQ: {
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//         data: [],
//       };
//     }

//     case GET_REQ_SUC: {
//       const strikePricesArry = payload.strikePrices;
//       const ulValue = payload.underlyingValue;
//       const data = payload.data;
//       const expiryDate = payload.expiryDates;
//       const elem = modifyData(data).filter(
//         (el) =>
//           el.strikePrice === findNearestStrikePrice(strikePricesArry, ulValue)
//       );

//       const septData = modifyData(data).filter((item) =>
//         item.expiryDate.includes("Sep")
//       );
//       const augData = modifyData(data).filter((item) =>
//         item.expiryDate.includes("Oct")
//       );
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: modifyData(data),
//         underlyingValue: ulValue,
//         strikePrices: strikePricesArry,
//         twoMonthData: [...augData, ...septData],
//         nearestStrikePrice: findNearestStrikePrice(strikePricesArry, ulValue),
//       };
//     }

//     case GET_REQ_FAILS: {
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         data: [],
//       };
//     }

//     case CURRENT_MONTH_DATA: {
//       return {
//         ...state,
//         currentMonth: !state.currentMonth,
//       };
//     }

//     case NEXT_MONTH_DATA: {
//       return {
//         ...state,
//         nextMonth: !state.nextMonth,
//       };
//     }

//     case GET_TWO_MONTH_DATA: {
//       const septData = state.data.filter((item) =>
//         item.expiryDate.includes("Sep")
//       );
//       const augData = state.data.filter((item) =>
//         item.expiryDate.includes("Oct")
//       );
//       return {
//         ...state,
//         twoMonthData: [...augData, ...septData],
//       };
//     }

//     case EMPTY_DATA: {
//       return {
//         ...state,
//         twoMonthData: [],
//       };
//     }

//     case FIRST_MONTH: {
//       const septData = state.data.filter((item) =>
//         item.expiryDate.includes("Sep")
//       );
//       return {
//         ...state,
//         twoMonthData: septData,
//       };
//     }

//     case SECOND_MONTH: {
//       const augData = state.data.filter((item) =>
//         item.expiryDate.includes("Oct")
//       );
//       return {
//         ...state,
//         twoMonthData: augData,
//       };
//     }

//     case FIVE_MIN_DATA_SUC: {
//       const data = payload.data;
//       modifyData(data);
//       const septData = modifyData(data).filter((item) =>
//         item.expiryDate.includes("Sep")
//       );
//       const augData = modifyData(data).filter((item) =>
//         item.expiryDate.includes("Oct")
//       );
//       return {
//         ...state,
//         fiveMinBool: !state.fiveMinBool,
//         fiveMinData: [...augData, ...septData],
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default reducer;

// // case GET_TWO_MONTH_DATA: {
// //   const augData = state.data.filter((item) => item.expiryDate.includes("Aug"));
// //   const septData = state.data.filter((item) => item.expiryDate.includes("Sep"));
// //   console.log([...augData, ...septData]);
// //   return {
// //     ...state,
// //     twoMonthData:
// //       state.currentMonth == true && state.nextMonth == true ? [...augData, ...septData] : [],
// //   };
// // }

// // case FIVE_MIN_DATA: {
// //   return {
// //     ...state,
// //     isLoading5: true,
// //     isError5: false,
// //     fiveMinData: [],
// //   };
// // }
// // case FIVE_MIN_DATA_FAIL: {
// //   return {
// //     ...state,
// //     isLoading5: false,
// //     isError5: true,
// //     fiveMinData: [],
// //   };
// // }

// // isError5: false,
// // fiveMinData: [],
// // isLoading5: false,
// // secondMonth: [],
// // firstMonth: [],
