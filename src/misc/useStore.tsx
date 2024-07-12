// src/StoreProvider.tsx
import React, { createContext, useContext, ReactNode } from "react";

import Store from "./store";

const store = new Store();
const storeContext = createContext(store);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(storeContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
