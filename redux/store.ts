import { combineReducers, configureStore } from "@reduxjs/toolkit";
import amazonDataReducer from "./slices/amazonData";

const rootReducer = combineReducers({
  // put your slice of reducers here
  amazonData: amazonDataReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
