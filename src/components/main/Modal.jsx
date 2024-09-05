import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export default function Modal() {
    const [open, setOpen] = useState(true)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:py-10">
                                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md text-gray-800 hover:text-gray-500"
                                        onClick={() => setOpen(false)}
                                    >
                                        <HiXMark className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <h2 className="text-2xl font-semibold border-b py-3 text-center leading-6 text-gray-900">Ürün Sepetine Eklendi</h2>
                                <div className="my-4">
                                    <div className='border rounded-2xl p-2 flex sm:flex-row flex-col items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <div className='border inline-flex rounded-2xl p-1 m-1'><img src="src/assets/img/test.jpg" className='w-20' alt="" /></div>
                                            <div>
                                                <p>Lemanin yixildigi skuter</p>
                                                <p className='text-lg'>999,09 tl</p>
                                            </div>
                                        </div>
                                        <div className='border flex items-center rounded-full'>
                                            {item.count > 1 ? (
                                                <AiFillMinusCircle
                                                    onClick={() => handleDecrement()}
                                                    className="text-[#00BAD3] cursor-pointer text-[30px] block"
                                                />
                                            ) : (
                                                <BsTrash
                                                    onClick={() => handleRemove()}
                                                    className="text-white bg-[#00BAD3] rounded-full w-[26px] h-[26px] cursor-pointer px-[5px] text-[15px]"
                                                />
                                            )}
                                            <span className='mx-5'>1</span>
                                            <AiFillPlusCircle
                                                onClick={() => handleIncrement()}
                                                className="text-[#00BAD3] cursor-pointer text-[30px] block"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 flex sm:flex-row-reverse flex-col">
                                    <Link
                                        to='/basket'
                                        className="w-full rounded-full border text-center border-transparent bg-[#00BAD3] p-4 text-white sm:ml-3 sm:text-sm"
                                        onClick={() => { setOpen(false) }}
                                    >
                                        Sepete Git
                                    </Link>
                                    <button
                                        type="button"
                                        className="mt-3 w-full rounded-full border border-gray-300 bg-white p-4 text-gray-400 sm:mt-0 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Alışverişe devam et
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
