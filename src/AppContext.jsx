// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [scrollToRef, setScrollToRef] = useState(null);

  return (
    <AppContext.Provider value={{ scrollToRef, setScrollToRef }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
