import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});

export default store;

//Connect this to app
