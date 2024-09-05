import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { GoHeart, GoShareAndroid } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";

function CardInfo() {
    return (
        <section className="bg-slate-50">
            <div className="wrapper">
                <div className="py-5 px-3 flex gap-2">
                    <Link className="text-sm inline-flex items-center gap-1" to={'/'}>Ana Sayfa <IoIosArrowForward className="text-gray-400 " /></Link>
                    <p className="text-sm inline-flex items-center gap-1"> Katagory <IoIosArrowForward className="text-gray-400 " /></p>
                    <p className="text-sm inline-flex items-center gap-1"> Subkatagory <IoIosArrowForward className="text-gray-400 " /></p>
                    <p className="text-sm"> Mehsul adi</p>
                </div>
                <div className="flex gap-8 lg:gap-[1vw] lg:flex-row flex-col px-3 pb-5">
                    <img src="src/assets/img/test.jpg" className="w-[100vw] lg:w-[38vw] rounded-3xl" alt="" />
                    <div className="bg-white h-fit rounded-3xl p-5">
                        <p>aldun aldun</p>
                        <div className="flex gap-2 items-center">
                            <h1 className="text-2xl">Lemanin yixildigi skuter - ela nov skuter</h1>
                            <GoHeart className="border lg:inline hidden w-12 h-12 rounded-full p-3 cursor-pointer" />
                            <GoShareAndroid className="border lg:inline hidden w-12 h-12 rounded-full p-3 cursor-pointer" />
                        </div>
                        <p className="text-sm">Ürün Kodu: <span className="font-semibold">24004920</span></p>
                        <p className="text-red-600 text-2xl py-5">₺2.899,00</p>
                        <p className="text-sm">Marka: <span className="text-[#00BAD3] cursor-pointer">Columbia</span></p>
                        <p className="text-gray-400 text-[.75em] py-3 flex gap-5 items-center"><GiShoppingBag className="" /> A101 Ekstra'ya Özel</p>
                        <button className="bg-[#00BAD3] my-2 rounded-full w-full text-white py-3">Sepete Ekle</button>
                        <div className="flex gap-2 mt-2 lg:hidden">
                            <button className="flex items-center gap-3 border rounded-full p-3 w-full justify-center">
                                <GoShareAndroid className="text-2xl" />
                                <span className="sm:block hidden">Paylaş</span>
                            </button>
                            <button className="flex items-center gap-3 border text-nowrap rounded-full p-3 w-full justify-center">
                                <GoHeart className="text-2xl" />
                                <span className="sm:block hidden">Favorilere Ekle</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardInfo