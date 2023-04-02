import Link from "next/link"

import { PaperClipIcon } from '@heroicons/react/20/solid'
import "tailwindcss/tailwind.css"

export default function Example({setPilihan, detail}) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg ">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Informasi Pesanan</h3>
       
      </div>
      <div className="border-t border-gray-200">
        <dl>
          
            <div >
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nama Pemesan</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{detail.nama ? detail.nama : ''}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status Pesanan</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{detail.statusPesanan ? detail.statusPesanan : ''}</dd>
          </div>
          {detail.order?.map((b, i2) => (
            
              <div key={i2} className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">{b.nama ? b.nama : ""}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {b.jumlah ? b.jumlah : ""} Porsi</dd>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> Rp.{b.harga ? b.harga : ""}</dd>
              </div>
        
          ))}
          
            </div>
          

          <div className='flex gap-5 px-5 py-10'>
              <button
                // href="/dasboard"
                onClick={() => {
                  setPilihan("Daftar Pesanan")
                }}
                // type="submit"
                className="group relative flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                
                  Kembali
                
              </button>
              
            </div>
         
        </dl>
      </div>
    </div>
  )
}

