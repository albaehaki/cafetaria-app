import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [nama, setNama] = useState("zacky al baehaki");
 

  return (
    <DataContext.Provider
      value={{ nama, setNama }}
      {...props}
    />
  );
};
