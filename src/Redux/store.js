import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "root",
  storage, // defaults to localStorage for web
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
