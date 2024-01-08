"use client";
import { PropsWithChildren, useRef } from "react";
import { AppStore, createStore } from "./store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist";

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  const persistor = useRef<Persistor>();

  if (!storeRef.current) storeRef.current = createStore();
  if (!persistor.current) persistor.current = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor.current}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
