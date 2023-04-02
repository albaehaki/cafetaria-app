import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [nama, setNama] = useState("zacky al baehaki");
  const [data, setData] = useState()
  const [dataProduk, setDataProduk] = useState([])
  const [listCart, setListCart] = useState([])

  return (
    <DataContext.Provider
      value={{ nama, setNama, data, setData, dataProduk, setDataProduk, listCart, setListCart }}
      {...props}
    />
  );
};
