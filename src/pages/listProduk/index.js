import {  useRef, useState} from "react";

import 'tailwindcss/tailwind.css'
import { uid } from 'uid';

// hooks
import { useHome } from "@/hooks/useHome";
import { useListProduk } from "@/hooks/useListProduk";

// Components
import Header from '@/components/header'
import  Cart from "@/components/cart";


  
  export default function ListProduk({dataProduk}) {
    // hooks
    const {addProduk, deleteProduk} = useListProduk()
    // state
    const [open, setOpen] = useState(false)
    // useRef
    
    const namaRef = useRef(null)
    const hargaRef = useRef(null)
    const linkImgRef = useRef(null)


    const handleAdd = (e, id) => {
      if(namaRef.current.value && namaRef.current.value && namaRef.current.value){
        addProduk({
          id: uid(16),
          nama: namaRef.current.value,
          harga: hargaRef.current.value,
          image: linkImgRef.current.value
        })
       
      } else{
        alert('anda belum mengisi data')
      }
      namaRef.current.value = ""
      hargaRef.current.value = ""
      linkImgRef.current.value = ""
    }
    return (
        <>
        {/* <Header setOpen={setOpen}/> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

          {/* form tambah Produk */}
          <form >
          <div className="sm:col-span-4">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Nama Produk
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                  ref={namaRef}
                    type="text"
                    // name="username"
                    // id="username"
                    // autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
          <div className="sm:col-span-4">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Harga Perporsi
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                  ref={hargaRef}
                    type="Number"
                    // name="username"
                    // id="username"
                    // autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
          
          <div className="sm:col-span-4">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Link Gambar
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                  ref={linkImgRef}
                    type="text"
                    // name="username"
                    // id="username"
                    // autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
          <div className="sm:col-span-4">
            
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                <button 
            type="submit"
            onClick={(e) => {
                    handleAdd(e.preventDefault());
                  }} 
                  className=' w-[100%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-95 focus:outline-none focus:shadow-outline'>Add</button>
                </div>
              </div>
            </div>
           
            </form>

            {/* Akhir Form Tambah Produk */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {dataProduk?.map((product) => (
              <div  key={product.id? product.id : ""} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image? product.image : ''}
                    // alt={product.imageAlt}
                    className="h-[300px] w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <a href={product.href}> */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.nama? product.nama : ''}
                      {/* </a> */}
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.harga? product.harga : ''}</p>
                </div>
                  <button 
                  onClick={(e) => {
                    console.log(product.id)
                    deleteProduk(product.id)
                  }} className=' w-[100%] bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-95 focus:outline-none focus:shadow-outline'>remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
     
      </>
    )
  }
  