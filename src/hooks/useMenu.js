import React, {useState, useContext} from 'react'
import { uid } from 'uid';

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

export const useMenu = () => {
// useContext
const {data, setData, dataProduk, setDataProduk, listCart, setListCart, listOrder, setListOrder} = useContext(DataContext)
const uuid = uid(16)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database


const addListProduk = (e, data) => {
    if(listCart?.filter((x,i) => x.id === e).length === 0){
    const noUrut = dataProduk.findIndex((x) => x.id === e)
    const filtered = dataProduk
    .filter((x, i) => i === noUrut)
    // .task.filter((x, i) => i !== noUrut[0].noUrutTask);
console.log(filtered)
setListCart([...listCart, data])
    }
}
const deletListCart = (e, data) => {
    const noUrut = dataProduk.findIndex((x) => x.id === e)
    const filtered = dataProduk
    .filter((x, i) => i !== noUrut)
    // .task.filter((x, i) => i !== noUrut[0].noUrutTask);
console.log(filtered)
setListCart(filtered)

}

const addOrder = (e) => {
    console.log(e, listCart, "di usemenu")
    console.log(Object.keys(listOrder).length)

    set(ref(realtimedb, `listOrder/${listOrder? Object.keys(listOrder).length : 0}`),{
          id: uuid,
          statusPesanan: "antrian",
          nama: e,
          order: listCart,
    }).then((res) => {
            console.log(res)
        })
        .catch((error) => {
          alert(error);
        })
}



    
  return { addListProduk, deletListCart, addOrder}
}
