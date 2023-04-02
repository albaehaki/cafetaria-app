import React, {useState, useContext} from 'react'

// firebase
import {
    ref,
    onValue,
    set,
    remove,
    update,
    getDatabase,
  } from "firebase/database";
import app from "@/Services/firebase";

// context
import { DataContext } from '@/Context'

export const useHome = () => {
// useContext
const {data, setData, dataProduk, setDataProduk} = useContext(DataContext)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database
const getData = (e) => {
    setData([]);
    onValue(ref(realtimedb), (snapshot) => {
      const databd = snapshot.val();
      setData(databd);

      Object.entries(databd).map(([key, val], i) => {
        setDataProduk(val)
        // Object.entries(val).map(([key, value], i) => {
        //   if (key === "card") {
            // setData(val);
           
        //   } else {
        //   }
        // });
      });
    });
  };
    
  return {getData, data, dataProduk}
}
