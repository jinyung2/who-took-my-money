import { combineReducers, configureStore } from "@reduxjs/toolkit";
import amazonDataReducer from "./slices/amazonData";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "amazonDataRoot",
  storage,
};

const rootReducer = combineReducers({
  // put your slice of reducers here
  amazonData: amazonDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
