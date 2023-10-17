import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { sbReducer } from "./sbReducer";
import { realReducer } from "./RealReducer";
import { OptionChainReducer } from "./OptionChainPage/oChainReducer";
import { MSreducer } from "./Multi_Strike_OI/MSReducer";
import { authReducer } from "./authReducer";
import { oiReducer } from "./Open_Interest/OIreducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  reducer,
  realReducer,
  sbReducer,
  OptionChainReducer,
  MSreducer,
  authReducer,
  oiReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
