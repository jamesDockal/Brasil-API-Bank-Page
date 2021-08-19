import { createStore, combineReducers } from "redux";

import authReducer from "./auth";

const combinedReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(combinedReducers);

export default store;
