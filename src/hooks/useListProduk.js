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

export const useListProduk = () => {
// useContext
const {data, setData, dataProduk, setDataProduk} = useContext(DataContext)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database

const addProduk = (e) => {
    // console.log(Object.keys(dataProduk).length)
    set(ref(realtimedb, `product/${dataProduk? Object.keys(dataProduk).length : 0}`),{
          id: e.id,
          jumlah: 0,
          nama: e.nama,
          harga: e.harga,
          image: e.image,
    }).then((res) => {
            console.log(res)
        })
        .catch((error) => {
          alert(error);
        })
}
const deleteProduk = (e) => {
    const noUrut = dataProduk.findIndex((x) => x.id === e)
    const filtered = dataProduk
    .filter((x, i) => i !== noUrut)
    // .task.filter((x, i) => i !== noUrut[0].noUrutTask);
console.log(filtered)

    set(ref(realtimedb, `product`), filtered)
    .then((res) => {
            console.log(res)
        })
        .catch((error) => {
          alert(error);
        })
}

    
  return { addProduk, deleteProduk}
}
