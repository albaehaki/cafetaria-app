import {  useRef, useState} from "react";

import 'tailwindcss/tailwind.css'

// Components
import Header from '@/components/header'
import  Cart from "@/components/cart";

const products = [
    {
      id: 1,
      name: 'Nasi Goreng',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '10.000',
      color: 'Black',
      
    },
    {
      id: 2,
      name: 'Nasi Goreng',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '10.000',
      color: 'Black',
      
    },
   
    // More products...
  ]
  
  export default function Example() {
    const [open, setOpen] = useState(false)
    const buttonAdd = useRef(null)

    const handleAdd = (e, id) => {
      console.log(e, id,buttonAdd )
    }
    return (
        <>
        <Header setOpen={setOpen}/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div ref={buttonAdd} key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                  <button onClick={(e) => {
                    handleAdd(e,product.id);
                  }} className=' w-[100%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-95 focus:outline-none focus:shadow-outline'>Add to Chart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cart open={open} setOpen={setOpen} />
      </>
    )
  }
  