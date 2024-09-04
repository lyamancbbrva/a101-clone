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

function Main() {
    return (
        <main className="bg-slate-50">
            <div className="wrapper">
                <MainSlider />
                <div className="flex gap-2 justify-center pb-6">
                    <img src={cargo} alt="cargo" className="w-5" />
                    <p className="text-sm select-none text-[#00BAD3]">500 TL ve üzeri alışverişlerinizde ücretsiz kargo!</p>
                </div>
                <div className="flex gap-[1.5vw] justify-center items-center px-3 py-3">
                    <a href="" className="block md:hidden min-w-[82px]"><img src={aldin_mob} alt="aldin" /></a>
                    <a href="" className="block md:hidden min-w-[82px]"><img src={aldin_extra_mob} alt="aldin-aldin" /></a>
                    <a href="" className="block md:hidden min-w-[82px]"><img src={haftanin_yildizlari_mob} alt="haftanin yildizlari" /></a>
                    <a href="" className="block md:hidden min-w-[82px]"><img src={tl10_mobil} alt="10tl ve uzeri" /></a>
                    <a href="" className="hidden md:block w-[24%]"><img src={aldin} alt="aldin" /></a>
                    <a href="" className="hidden md:block w-[24%]"><img src={aldin_extra} alt="aldin-aldin"  /></a>
                    <a href="" className="hidden md:block w-[24%]"><img src={haftanin_yildizlari} alt="haftanin yildizlari" /></a>
                    <a href="" className="hidden md:block w-[24%]"><img src={tl10} alt="10tl ve uzeri"  /></a>
                </div>
            </div>
        </main>
    )
}

export default Main