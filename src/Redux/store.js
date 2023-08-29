import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reducer from "./reducer";
import { sbReducer } from "./sbReducer";
const rootReducer = combineReducers({
  reducer,
  sbReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
