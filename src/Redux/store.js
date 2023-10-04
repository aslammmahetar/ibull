import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reducer from "./reducer";
import { sbReducer } from "./sbReducer";
import { realReducer } from "./RealReducer";
import { OptionChainReducer } from "./OcReducer";

const rootReducer = combineReducers({
  reducer,
  realReducer,
  sbReducer,
  OptionChainReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
