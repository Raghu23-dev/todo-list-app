import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});

export default store;

//Connec this to app
