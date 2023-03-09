import React, { createContext, useContext, useState } from "react";

const ContextProvider = createContext();
const DataContext = ({ children }) => {
  const [data, setData] = useState();
  const setValues = (data) => {
    setData((prev) => ({
      ...prev,
      ...data,
    }));
  };
  return (
    <ContextProvider.Provider value={{ data, setValues }}>
      {children}
    </ContextProvider.Provider>
  );
};
const useData = () => useContext(ContextProvider)
export {DataContext, useData}