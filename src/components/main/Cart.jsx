import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiXMark } from "react-icons/hi2";

export default function Cart({item, basket,setBasket }) {

    const [modal, setModal] = useState(false)

    function addToBasket(e) {
    
       e.preventDefault();
       const nese =  basket.find(elem=> elem.id == item.id)
       !nese ? setBasket([...basket, { ...item, count: 1 }]) :  setBasket(basket.map(elem =>  elem.id === item.id ? { ...elem, count: elem.count + 1 } : elem ));
        
    }
    

    return (
        <>
       { item ?
            <Link to={`/product/${item?.id}`} className="px-3 w-[100%] block rounded-2xl border-gray-200 border relative bg-white">
                <GoHeart
                    onClick={(e) => {
                        e.preventDefault()
                        setModal(true)
                    }}
                    className="text-2xl absolute right-3 top-5" />
                <img src={
                    item?.imageUrl?.length > 0 ? item.imageUrl
                     : item?.imageUrl[0]} alt={item?.name} className="object-cover h-[40vh] lg:h-[25vh] xl:h-[20vh] mt-4 object-center w-full rounded-md dark:bg-gray-500" />
                <div className="mt-2.5 mb-2">
                    <h2 className="text-[.8em] h-10 capitalize text-ellipsis overflow-hidden tracking-wide">{item?.name}</h2>
                </div>
                <p className="text-red-600 text-lg font-semibold mb-2">₺{item?.price}</p>
                <div className="pb-2">
                    <button 
                    onClick={addToBasket}
                    className="bg-[#00BAD3] text-white rounded-3xl py-1.5  text-sm w-full">Sepete Ekle</button>
                </div>
            </Link>
            :
            <div className="flex flex-col m-6 rounded shadow-md w-60 sm:w-70 animate-pulse h-96">
                <div className="h-48 rounded-t m-6 dark:bg-gray-300"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                </div>
            </div>
}
            {/* like modal */}
            <Transition.Root show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[45vw] sm:py-10">
                                    <div onClick={() => setModal(false)} className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-800 hover:text-gray-500"
                                        >
                                            <HiXMark className="h-6  w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="#F3F6FA"></circle><path d="M40.0977 50C38.9438 50 38 50.9439 38 52.0977C38 53.2516 38.9439 54.1954 40.0977 54.1954C41.2516 54.1954 42.1954 53.2516 42.1954 52.0977C42.1954 50.8392 41.2516 50 40.0977 50Z" fill="#F34133"></path><path d="M40.0948 47C41.0894 47 41.8749 46.1926 41.9223 45.1991C41.9359 44.9151 41.953 44.7839 41.9697 44.6742C42.7813 39.3351 50 39.1583 50 32.5429C50 27.5048 45.6777 24 40.455 24C35.9511 24 32.2308 26.8176 31.2498 30.7227C31.0042 31.7004 31.8324 32.5429 32.8404 32.5429C33.8177 32.5429 34.5841 31.735 34.9295 30.8208C35.6977 28.7874 37.7536 27.2857 40.455 27.2857C43.7867 27.2857 46.263 29.4762 46.263 32.5429C46.263 37.8123 39.1147 37.6195 38.3584 44.2837C38.343 44.4188 38.3293 44.774 38.3186 45.199C38.2933 46.1934 39.1002 47 40.0948 47Z" fill="#F34133"></path></svg>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-medium text-center py-3">Ged Giriş elə ə!</h5>
                                        <p className="mt-2 text-sm text-center">Siparişlerini sana ulaştırabilmemiz için giriş yapman gerekiyor.</p>
                                    </div>
                                    <div className="mt-5 sm:mt-4 justify-center flex sm:flex-row-reverse flex-col">
                                        <button
                                            className="w-full rounded-full border text-center border-transparent bg-[#00BAD3] p-4 text-white sm:ml-3 sm:text-sm"
                                            onClick={() => { setModal(false) }}
                                        >
                                            Vazgeç
                                        </button>
                                        <Link to={'/login'}
                                            type="button"
                                            className="mt-3 w-full rounded-full border text-center border-gray-300 bg-white p-4 text-gray-400 sm:mt-0 sm:text-sm"
                                            onClick={() => setModal(false)}
                                        >
                                            Giriş yap
                                        </Link>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
