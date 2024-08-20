import React, { createContext } from 'react';

export const MyContext = createContext({
  data: ''
});

export const MyContextProvider = ({ children }) => {
  const value = { data: 'Hello, World!' };
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
