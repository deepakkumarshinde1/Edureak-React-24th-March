import { combineReducers } from "@reduxjs/toolkit";
import ProductReducerSlice from "./ProductReducerSlice";

export let reducer = combineReducers({
  product: ProductReducerSlice.reducer,
});
