import React, { createContext, useContext, useState } from "react";

const CheckboxContext = createContext();

export function useCheckboxContext() {
  return useContext(CheckboxContext);
}

export function CheckboxProvider({ children }) {
  const [isSelected, setIsSelected] = useState(false);

// const onChange = () => {
//     setIsSelected((prevSelected) => {
//         console.log("onChange Checkbox State:", !prevSelected);
//         return !prevSelected;
//         });
// };

const onChange = () => {
    setIsSelected(!isSelected);
};

  return (
    <CheckboxContext.Provider value={{ isSelected, onChange }}>
      {children}
    </CheckboxContext.Provider>
  );
}
