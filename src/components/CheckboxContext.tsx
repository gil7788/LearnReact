import React, { createContext, useContext, useReducer, useState } from "react";

const CheckboxContext = createContext();

export function useCheckboxContext() {
  return useContext(CheckboxContext);
}

export function CheckboxProvider({ children }) {
  const [isSelected, toggle] = useReducer(isSelected => !isSelected, false);

  return (
    <CheckboxContext.Provider value={{ isSelected, toggle }}>
      {children}
    </CheckboxContext.Provider>
  );
}
