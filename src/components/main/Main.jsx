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
import kampanya1 from '../../assets/img/koleksiyon (1).jpg'
import kampanya2 from '../../assets/img/koleksiyon (2).jpg'
import kampanya3 from '../../assets/img/kamp.jpg'
import kampanya4 from '../../assets/img/akbank.jpg'
import kampanya5 from '../../assets/img/cehiz.jpg'
import kampanya6 from '../../assets/img/a101kampanya.jpg'
import kampanya7 from '../../assets/img/ucuzunucuzu.jpg'
import kampanya8 from '../../assets/img/ayinsatanlari.jpg'
import kampanya9 from '../../assets/img/haftaninsatanlari.jpg'
import kampanya10 from '../../assets/img/yeniurunler.jpg'
import kampanya11 from '../../assets/img/endirim50.jpg'
import CategorySlider from "./CategorySlider"
import Highlights from "./Highlights"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import Cart from "./Cart"
import { useEffect, useState } from "react"
import { getDiscountedproducts } from "../../api/api"
import { Link } from "react-router-dom"

function Main({mainCategory, basket, setBasket}) {

    const [discountedProducts, setDiscountedProducts] = useState([])

    useEffect(() => {
        getDiscountedproducts().then(resp => setDiscountedProducts(resp.products))
    },[])


    const kolleksion = [
        {img : kampanya1 , name: 'Axess Kampanyası'},
        {img : kampanya4 , name: 'Akbank Kampanyası'},
        {img : kampanya3 , name: 'Kamp Alış verişi'},
        {img : kampanya2 , name: 'Mobilya Alış verişi'},
        {img : kampanya5 , name: 'Çeyiz alış verişi'},
        {img : kampanya6 , name: 'Sadece a101 ekstrada!'},
        {img : kampanya7 , name: 'Ucuzun da ucuzu fiyatlar!'},
        {img : kampanya8 , name: 'Ayın çok satanları'},
        {img : kampanya9 , name: 'Haftanın çok satanları'},
        {img : kampanya10 , name: 'Yeni gelen ürünler'},
        {img : kampanya11 , name: 'Seçili kırtasiye ürünlerinde %50"e varan indirim'}
    ]
    
    return (
        <div className="bg-[#F3F6FA] min-h-[30vh]">
            <div className="wrapper w-[95%] mx-auto">
                <CategorySlider mainCategory={mainCategory}/>
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
                <Highlights basket={basket} setBasket={setBasket}/>
                <div className="py-5">
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
                    delay: 3000,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={
                    {
                        forceToAxis: true,
                        releaseOnEdges: true
                    }
                }
                direction="horizontal"
                modules={[Navigation,  Mousewheel, Autoplay]}
                className='mySwiper mainSlider'
            >

                {
                  kolleksion &&  kolleksion.map((item,i) => <SwiperSlide key={i}  >
                        <div className="rounded-2xl overflow-hidden">
                            <img className="w-full" src={item.img} alt={item.name} />
                            <div className=" bg-[#00BAD3] xs:px-1 xs:py-0 369:p-3 p-3 md:h-[60px] text-white ">{item.name}</div>
                        </div>
                    </SwiperSlide>)
                }
                
                </Swiper>
                </div>
                <div className="py-5">
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
                    delay: 3500,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={
                    {
                        forceToAxis: true,
                        releaseOnEdges: true
                    }
                }
                direction="horizontal"
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
                <div className="my-5 ucuz-fiyatlar rounded-[30px] md:relative overflow-hidden">
                <div className="py-5 md:absolute w-full bottom-0 lg:right-0  lg:w-[60%] lg:bottom-3">
                <Swiper
                  breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 7,
                    },
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={
                    {
                        forceToAxis: true,
                        releaseOnEdges: true
                    }
                }
                direction="horizontal"
                modules={[Navigation,  Mousewheel]}
                className='mySwiper mainSlider'
            >

                {
                discountedProducts &&  discountedProducts?.map((item,i) => <SwiperSlide key={i} ><Cart item={item} basket={basket} setBasket={setBasket}/></SwiperSlide>) 
                }         
                </Swiper>
                </div>
                </div>
                <Highlights basket={basket} setBasket={setBasket} />
                <Link to={''} className="block aldin1  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block aldin2  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block aldin3  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block aldin4  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block aldin5  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block iphone  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block samsung  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block xiaomi  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block tefal  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block stanley  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block skechers  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block crocs  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block kamp  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block mobilya  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
                <Link to={''} className="block ceyiz  overflow-hidden 550:h-[40vh] sm:h-[50vh] lg:h-[30vh] w-full h-[30vh] rounded-2xl md:h-[25vh] my-5 xl:h-[40vh] "></Link>
            </div>
        </div>
    )
}

export default Main