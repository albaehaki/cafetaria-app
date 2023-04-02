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
import app from "@/services/firebase";

// context
import { DataContext } from '@/Context'

export const useHome = () => {
// useContext
const {data, setData, dataProduk, setDataProduk, listOrder, setListOrder} = useContext(DataContext)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database
const getData = (e) => {
    setData([]);
    onValue(ref(realtimedb), (snapshot) => {
      const databd = snapshot.val();
      setData(databd);

      Object.entries(databd).map(([key, val], i) => {
        if(key === "listOrder"){
          
            setListOrder(val)
        }else if(key === "product"){
           
            setDataProduk(val)
        }
       
      });
    });
  };
    
  return {getData, data, dataProduk}
}
