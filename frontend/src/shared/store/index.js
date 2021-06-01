import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userSlice from "./slice/user";
import formSlice from "./slice/form";
import numberSlice from "./slice/numberadd";
const reducer = combineReducers({
  userSlice,
  formSlice,
  numberSlice
});
const store = configureStore({
  reducer,
  formSlice,
  numberSlice
});
export default store;
