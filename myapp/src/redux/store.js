import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./CombineReducers";

let store = configureStore({
  reducer,
});

export default store;
