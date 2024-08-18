import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// Configure the Redux store with the todos reducer
const store = configureStore({
  reducer: reducer,
});

export default store;
