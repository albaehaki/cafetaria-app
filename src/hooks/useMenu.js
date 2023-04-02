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

export const useListProduk = () => {
// useContext
const {data, setData, dataProduk, setDataProduk} = useContext(DataContext)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database



    
  return { addProduk, deleteProduk}
}
