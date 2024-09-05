import MainSlider from "./MainSlider"
import cargo from '../../assets/img/cargo.png'
import aldin_mob from '../../assets/img/aldin-aldin-mobil.png'
import aldin from '../../assets/img/aldin-aldin.png'
import aldin_extra_mob from '../../assets/img/aldin-extra-mobil.png'
import aldin_extra from '../../assets/img/aldin-aldin-extra.png'
import tl10_mobil from '../../assets/img/10TL-ve-uzeri-mobil.png'
import tl10 from '../../assets/img/10tl.png'
import haftanin_yildizlari_mob from '../../assets/img/haftanin-yildizlari-mobil.png'
import haftanin_yildizlari from '../../assets/img/haftanin-yildizlari.png'
import CategorySlider from "./CategorySlider"
import Highlights from "./Highlights"
import Modal from "./Modal"

function Main() {
    return (
        <main className="bg-slate-50">
            <Modal />
            <div className="wrapper">
                <CategorySlider />
                <MainSlider />
                <div className="flex gap-2 justify-center pb-6">
                    <img src={cargo} alt="cargo" className="w-5" />
                    <p className="text-sm select-none text-[#00BAD3]">500 TL ve üzeri alışverişlerinizde ücretsiz kargo!</p>
                </div>
                <div className="flex gap-[1.5vw] justify-center items-center px-3 py-5">
                    <a href="" className="block md:hidden"><img  className="md:h-[50%]" src={aldin_mob} alt="aldin" /></a>
                    <a href="" className="block md:hidden"><img  className="md:h-[50%]" src={aldin_extra_mob} alt="aldin-aldin" /></a>
                    <a href="" className="block md:hidden"><img  className="md:h-[50%]" src={haftanin_yildizlari_mob} alt="haftanin yildizlari" /></a>
                    <a href="" className="block md:hidden"><img  className="md:h-[50%]" src={tl10_mobil} alt="10tl ve uzeri" /></a>
                    <a href="" className="hidden md:block "><img className="md:h-[50%]" src={aldin} alt="aldin" /></a>
                    <a href="" className="hidden md:block "><img className="md:h-[50%]" src={aldin_extra} alt="aldin-aldin"  /></a>
                    <a href="" className="hidden md:block "><img className="md:h-[50%]" src={haftanin_yildizlari} alt="haftanin yildizlari" /></a>
                    <a href="" className="hidden md:block "><img className="md:h-[50%]" src={tl10} alt="10tl ve uzeri"  /></a>
                </div>
                <Highlights />
            </div>
        </main>
    )
}

export default Main