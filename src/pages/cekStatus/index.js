import React,{ useRef, useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import 'tailwindcss/tailwind.css'

import { DataContext } from '@/Context'
import { useHome } from '@/hooks/useHome'

export default function Example() {
  const {listOrder} = useContext(DataContext)
  const { getData } = useHome()
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)
  const handleButton = () => {
    console.log(formRef.current.value)
    const filtered  = listOrder.filter((x) => x.nama === formRef.current.value)
    // setStatus([...status, listOrder.filter((x) => x.nama === formRef.current.value)])
    if(filtered.length !== 0){
      setStatus(filtered[0].statusPesanan)
      formRef.current.value = ''
    }
    formRef.current.value = ''
  }
useEffect(() => {
  getData()
}, [])


  console.log(listOrder.filter((x) => x.nama === "abdul"))
  console.log(status)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 m-auto">
          <p className='font-bold'>Status Orderan anda : {status === null ? "" : status}</p>
          <form onSubmit={(e) => {
            e.preventDefault()
          }} className="mt-8 space-y-6" 
           // action="#" 
          // method="POST" 
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label  className="sr-only">
                  Nama Pemesan Makanan
                </label>
                <input
                  ref={formRef}
                  // id="email-address"
                  // name="nama-pemesan"
                  type="text"
                 
                 
                  className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nama Pemesan"
                />
              </div>
              
            </div>

            

            <div className='flex gap-5'>
              <Link
                href="/"
                // type="submit"
                className="group relative flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                
                  Kembali
                
              </Link>
              <button
              onClick={() =>{
                handleButton()
              }}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                
                Cek Status
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  )
}
