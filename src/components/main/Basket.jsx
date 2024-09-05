import { BsTrash } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";


function Basket() {
    return (
        <section className="bg-slate-50">
            <div className="wrapper flex flex-col gap-[2.5vw] lg:flex-row px-3">
                <div className="lg:w-[660px] w-full">
                    <div className="flex items-center py-4 border-b">
                        <h2 className="text-lg font-semibold mr-2">Sepetim</h2>
                        <span className="text-[.8em] text-gray-400">3 ürün eklendi</span>
                    </div>
                    <div className="flex cursor-pointer items-center pt-2.5 pb-2 justify-end gap-1"><BsTrash className="text-lg" />Sil</div>
                    <div className="cards pb-5">
                        <div className='bg-white shadow-sm my-4 rounded-2xl p-2 flex flex-row items-center gap-5'>
                            <div className='border inline-flex rounded-2xl p-1 m-1'><img src="src/assets/img/test.jpg" className='w-20' alt="" /></div>
                            <div className='flex items-start sm:items-center flex-col sm:flex-row gap-3 w-full justify-between'>
                                <div>
                                    <p className="font-semibold">Lemanin yixildigi skuter</p>
                                    <p className='text-lg'>999,09 tl</p>
                                </div>
                                <div className='border inline rounded-full'>
                                    <button className='bg-[#00BAD3] text-white w-7 h-7 rounded-full shadow-[#00BAD3] shadow-sm'> - </button>
                                    <span className='mx-5'>2</span>
                                    <button className='bg-[#00BAD3] text-white w-7 h-7 rounded-full shadow-[#00BAD3] shadow-sm'>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-sm my-4 rounded-2xl p-2 flex flex-row items-center gap-5'>
                            <div className='border inline-flex rounded-2xl p-1 m-1'><img src="src/assets/img/test.jpg" className='w-20' alt="" /></div>
                            <div className='flex items-start sm:items-center flex-col sm:flex-row gap-3 w-full justify-between'>
                                <div>
                                    <p className="font-semibold">Lemanin yixildigi skuter</p>
                                    <p className='text-lg'>999,09 tl</p>
                                </div>
                                <div className='border inline rounded-full'>
                                    <button className='bg-[#00BAD3] text-white w-7 h-7 rounded-full shadow-[#00BAD3] shadow-sm'> - </button>
                                    <span className='mx-5'>2</span>
                                    <button className='bg-[#00BAD3] text-white w-7 h-7 rounded-full shadow-[#00BAD3] shadow-sm'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[460px] w-full">
                    <h2 className="text-lg font-semibold pt-4">Sepet Özeti</h2>
                    <p className="flex gap-2 items-center text-green-600 text-sm font-semibold py-2"><CiCircleCheck className="text-2xl" />Ücretsiz Teslimat</p>
                    <div className="bg-white p-5 rounded-2xl">
                        <div className="flex justify-between items-center pb-4">
                            <p className="text-sm">Sepet Tutarı</p>
                            <p>₺577,00</p>
                        </div>
                        <div className="flex justify-between border-b pb-4 items-center">
                            <p className="text-sm">Kargo Ücreti</p>
                            <p>₺0,00</p>
                        </div>
                        <div className="flex justify-between pt-5 items-center">
                            <p className="font-semibold">Toplam</p>
                            <p>₺577,00</p>
                        </div>
                    </div>
                    <button className="bg-[#00BAD3] my-7 rounded-full w-full text-white py-3">Devam et</button>
                </div>
            </div>
        </section>
    )
}

export default Basket