import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiXMark } from "react-icons/hi2";


export default function Login() {
    
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[45vw] sm:py-10">
                                    <div 
                                    onClick={() => {
                                        
                                        setOpen(false)
                                        }} className="absolute top-0 right-0 pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-800 hover:text-gray-500"
                                            >
                                            <HiXMark className="h-6  w-6" aria-hidden="" />
                                        </button>
                                    </div>
                                   <div>
                                        <h5 className="text-xl font-medium text-center py-3">Giriş Yap</h5>
                                        <p className="mt-2 text-sm text-center">Girmiş olduğun telefon numarasına bir doğrulama SMS’i göndereceğiz.</p>
                                    </div>
                                    <div className="mt-5 sm:mt-4 justify-center flex sm:flex-row-reverse flex-col">
                                       <input type="text" name="" id="" placeholder='Adınız...' className='w-full outline-none rounded-full border  p-4  sm:ml-3 sm:text-sm' />
                                        <button
                                            type="button"
                                            className="mt-3 w-full rounded-full border text-center border-[#8D939C] bg-[#8D939C] p-4 text-white font-thin sm:mt-0 sm:text-sm"
                                            onClick={() => setLikeModal(false)}
                                        >
                                            Devam
                                        </button>
                                    </div>
                                    <div className='py-8 flex justify-between items-start gap-2'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#8D939C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.73363 13.4002L10.267 13.4002C10.2793 13.4002 10.2904 13.4012 10.3003 13.4028L10.3003 14.3978C10.2904 14.3994 10.2793 14.4004 10.267 14.4004L9.73363 14.4004C9.72132 14.4004 9.71016 14.3994 9.70029 14.3978L9.70029 13.4028C9.71016 13.4012 9.72132 13.4002 9.73363 13.4002ZM9.73363 6.0002L10.267 6.0002C10.2793 6.0002 10.2904 6.0012 10.3003 6.00282L10.3003 10.7976C10.2904 10.7992 10.2793 10.8002 10.267 10.8002L9.73363 10.8002C9.72132 10.8002 9.71016 10.7992 9.70029 10.7976L9.70029 6.00282C9.71016 6.0012 9.72132 6.0002 9.73363 6.0002Z" fill="#8D939C" stroke="#8D939C"></path></svg>
                                        <p className='text-xs text-[#333]'>Doğrulama süreçleri kapsamındaki kişisel veri işleme faaliyetine ilişkin aydınlatma metni için <a href="" className='text-[#00BAD3]'>tıklayın</a>    .</p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
        </Transition.Root>
    )
}

