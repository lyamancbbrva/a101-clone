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
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';

function Main() {
    return (
        <main className="bg-[#F3F6FA]">
            <div className="wrapper w-[95%] mx-auto">
=======
import Modal from "./Modal"

function Main() {
    return (
        <main className="bg-slate-50">
            {/* <Modal /> */}
            <div className="wrapper">
>>>>>>> 810048dcff2378deafcf6411b13eab86a4680c02
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
<<<<<<< HEAD
                <Highlights/>
                <div className="py-3">
                <h5 className='pb-3 font-medium text-base'>Kolleksiyonlar</h5>
                <Swiper
                  breakpoints={{
                    300: {
                        slidesPerView: 2.5,
                        spaceBetween: 13,
                    },
                    768: {
                        slidesPerView: 2.7,
                        spaceBetween: 17,
                    },
                    860: {
                        slidesPerView : 2.7,
                        spaceBetween: 15
                    },
                    992: {
                        slidesPerView: 2.8,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 7,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 7,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={true}
                modules={[Navigation,  Mousewheel, Autoplay]}
                className='mySwiper mainSlider'
            >

                {
                    new Array(10).fill(null).map((_,item) => <SwiperSlide key={item}  >
                        <div className="rounded-2xl overflow-hidden">
                            <img className="w-full" src="./src/assets/img/koleksiyon.jpg" alt="" />
                            <div className=" bg-[#00BAD3] xs:px-1 xs:py-0 369:p-3 p-3 text-white ">Ayın çok satanları</div>
                        </div>
                    </SwiperSlide>)
                }
                
         
                </Swiper>
                </div>
                <div className="py-3">
                       <Swiper
                  breakpoints={{
                      300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        }
                    }}
                    loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={true}
                modules={[Navigation,  Mousewheel, Autoplay]}
                className='mySwiper marks'
            >
                {
                    new Array(13).fill(null).map((_,item) =>

                     <SwiperSlide key={item}  >  
                     <div  className="bg-white rounded-xl">
                        <img className="h-[34px] xs:ml-9 md:ml-3 object-contain  lg:ml-5 xl:ml-9 " src={`./src/assets/img/${item+1}.png`} alt="marks" />
                    </div>                  
                    </SwiperSlide>
                    )
                }
                
         
                </Swiper>
                </div>
=======
                <Highlights />
>>>>>>> 810048dcff2378deafcf6411b13eab86a4680c02
            </div>
        </main>
    )
}

export default Main