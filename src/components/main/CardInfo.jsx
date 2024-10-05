import { Link, useParams } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { GoHeart, GoShareAndroid } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";;
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiXMark } from "react-icons/hi2";
import { getProductById, getProducts } from "../../api/api";
import aldin_extra from '../../assets/img/aldin-aldin-extra.png'

function CardInfo() {
    const [likeModal, setLikeModal] = useState(false)
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then(resp => setData(resp))
    }, [])

    console.log(data);
    

    return (
        <>
            <section className="bg-slate-50">
                <div className="wrapper">
                    <div className="py-5 px-3 flex gap-2">
                        <Link className="text-sm inline-flex items-center gap-1" to={'/'}>Ana Sayfa <IoIosArrowForward className="text-gray-400 " /></Link>
                        <p className="text-sm capitalize"> {data?.name}</p>
                    </div>
                    <div className="flex gap-8 lg:gap-[1vw] lg:flex-row flex-col px-3 pb-5">
                        <img src={data?.imageUrl?.length > 0 ? data?.imageUrl[0] : data?.imageUrl} className="w-[100vw] lg:w-[38vw] rounded-3xl" alt="" />
                        <div className="bg-white h-fit rounded-3xl p-5  sm:min-w-[500px]">
                            <img className="md:h-[50%] pb-3" src={aldin_extra} alt="aldin-aldin" />
                            <div className="flex gap-2 items-center justify-between">
                                <h1 className="text-2xl capitalize py-2">{data?.name}</h1>
                                <div>
                                    <GoHeart onClick={() => setLikeModal(true)} className="border lg:inline hidden w-12 h-12 rounded-full p-3 cursor-pointer" />
                                    <GoShareAndroid className="border lg:inline hidden w-12 h-12 my-3 rounded-full p-3 cursor-pointer" />
                                </div>
                            </div>
                            <p className="text-red-600 text-2xl py-5">₺{data?.price}</p>
                            <p className="text-sm">Marka: <span className="text-[#00BAD3] cursor-pointer">Columbia</span></p>
                            <p className="text-gray-400 text-[.75em] py-3 flex gap-5 items-center"><GiShoppingBag className="" /> A101 Ekstra'ya Özel</p>
                            <button className="bg-[#00BAD3] my-2 rounded-full w-full text-white py-3">Sepete Ekle</button>
                            <div className="flex gap-2 mt-2 lg:hidden">
                                <button className="flex items-center gap-3 border rounded-full p-3 w-full justify-center">
                                    <GoShareAndroid className="text-2xl" />
                                    <span className="sm:block hidden">Paylaş</span>
                                </button>
                                <button onClick={() => setLikeModal(true)} className="flex items-center gap-3 border text-nowrap rounded-full p-3 w-full justify-center">
                                    <GoHeart className="text-2xl" />
                                    <span className="sm:block hidden">Favorilere Ekle</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* like modal */}
            <Transition.Root show={likeModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setLikeModal}>
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
                                    <div onClick={() => setLikeModal(false)} className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
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
                                            onClick={() => { setLikeModal(false) }}
                                        >
                                            Vazgeç
                                        </button>
                                        <Link to={'/login'}
                                            type="button"
                                            className="mt-3 w-full rounded-full border text-center border-gray-300 bg-white p-4 text-gray-400 sm:mt-0 sm:text-sm"
                                            onClick={() => setLikeModal(false)}
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

export default CardInfo