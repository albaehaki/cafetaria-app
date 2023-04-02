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

export const usePesanan = () => {
// useContext
const {data, setData, dataProduk, setDataProduk, listCart, setListCart, listOrder, setListOrder} = useContext(DataContext)
const uuid = uid(16)
// firebase
const realtimedb = getDatabase(app);
// getData Realtime Database


// const addListProduk = (e, data) => {
//     if(listCart?.filter((x,i) => x.id === e).length === 0){
//     const noUrut = dataProduk.findIndex((x) => x.id === e)
//     const filtered = dataProduk
//     .filter((x, i) => i === noUrut)
//     // .task.filter((x, i) => i !== noUrut[0].noUrutTask);
// console.log(filtered)
// setListCart([...listCart, data])
//     }
// }
// const deletListCart = (e, data) => {
//     const noUrut = dataProduk.findIndex((x) => x.id === e)
//     const filtered = dataProduk
//     .filter((x, i) => i !== noUrut)
//     // .task.filter((x, i) => i !== noUrut[0].noUrutTask);
// console.log(filtered)
// setListCart(filtered)

// }

const updateStatus = (a, b) => {
    console.log(a, b)
    const filtered1 = listOrder.filter((order, i) => order.id === b)
    const filtered2 = listOrder.filter((order, i) => order.id !== b)
    console.log(filtered1, filtered2)
    const updated = [
        {
            id: filtered1[0].id,
            statusPesanan: a,
            nama: filtered1[0].nama,
            order: filtered1[0].order,
        }
    ]
    const hasil = filtered2.concat(updated)

    set(ref(realtimedb, `listOrder`),hasil).then((res) => {
            console.log(res)
        })
        .catch((error) => {
          alert(error);
        })
}



    
  return {  updateStatus}
}
