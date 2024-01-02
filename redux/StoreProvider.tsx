"use client";
import { PropsWithChildren, useRef } from "react";
import { AppStore, createStore } from "./store";
import { Provider } from "react-redux";

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
