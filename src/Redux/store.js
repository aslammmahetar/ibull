import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reducer from "./reducer";
import { sbReducer } from "./sbReducer";
import { realReducer } from "./RealReducer";
import { OptionChainReducer } from "./OcReducer";
import { MSreducer } from "./MSReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  reducer,
  realReducer,
  sbReducer,
  OptionChainReducer,
  MSreducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
