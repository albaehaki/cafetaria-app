import {  useRef, useState, useContext, useEffect} from "react";

import 'tailwindcss/tailwind.css'

// context
import { DataContext } from "@/Context";

// hooks
import { useHome } from "@/hooks/useHome";
import { useMenu } from "@/hooks/useMenu";

// Components
import Header from '@/components/header'
import  Cart from "@/components/cart";


  
  export default function Example() {
    // context
    const {dataProduk, listCart, setListCart} = useContext(DataContext)
    // state
    const [open, setOpen] = useState(false)
    const buttonAdd = useRef(null)
    // hooks
    const { getData } = useHome()
    const { addListProduk, deletListCart, addOrder } = useMenu()

    const handleAdd = (e, id) => {
      console.log(e, id ,buttonAdd )
    }

    useEffect(() => {
      getData()
    }, [])

    console.log(listCart)
    return (
        <>
        <Header setOpen={setOpen}/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
  
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
                <button onClick={(e) => {
                    addListProduk(product.id, product)
                  }} className=' w-[100%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-95 focus:outline-none focus:shadow-outline'>Add to Chart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cart 
      addOrder={addOrder}
      deletListCart={deletListCart}
      listCart={listCart} 
      open={open} 
      setOpen={setOpen} 
      />
      </>
    )
  }
  