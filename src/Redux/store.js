import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  reducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
