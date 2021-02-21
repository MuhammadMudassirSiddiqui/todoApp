import React, { useContext, createContext, useReducer } from "react";

const stateContext = createContext();

export const StateContextProvider = ({ initialState, children, reducer }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export const GlobalContext = () => useContext(stateContext);
