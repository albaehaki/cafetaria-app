import { Fragment, useEffect, useState, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css'
import ListProduk from '../../components/listProduk'
import Board from '../../components/board'
import InfoOrder from '../../components/InfoOrder'

// context
import { DataContext } from '@/Context'

// hooks
import { useHome } from '@/hooks/useHome'
     


const navigation = [
  { name: 'Daftar Produk', href: '#', current: true },
  { name: 'Daftar Pesanan', href: '#', current: true },
  
]
const userNavigation = [
  
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // context
  const {listOrder} = useContext(DataContext)
  // hooks
  const {getData, data, dataProduk} = useHome()
  const [pilihan, setPilihan] = useState("Daftar Pesanan")
  const [detail, setDetail] = useState([])

 
  // useEffect
  useEffect(() => {
    getData()
    console.log(listOrder.filter((a,i) => a.statusPesanan === "antrian"), listOrder,'percobaan 1');
    console.log(listOrder.map((a,i) => a.id), 'percobaan 2');
  }, [])
  // useEffect(() => {
  //   getData()
  // }, [pilihan])
  console.log(pilihan)
  
 
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <button
                          onClick={() => {
                            // console.log(item)
                            setPilihan(item.name)
                          }}
                            key={item.name}
                            // href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                    onClick={() => {
                      // console.log(item)
                      setPilihan(item.name)
                    }}
                      key={item.name}
                      as="a"
                      // href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
                  
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pilihan}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
      {pilihan === "Daftar Pesanan" ? <Board listOrder={listOrder}  setDetail={setDetail}
  setPilihan={setPilihan} /> : pilihan === "Daftar Produk" ? <ListProduk dataProduk={dataProduk}/> : <InfoOrder setPilihan={setPilihan} detail={detail} />}
      
     {/* < ListProduk dataProduk={dataProduk}/> */}
    </>
  )
}
