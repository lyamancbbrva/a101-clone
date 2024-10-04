import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/api";
import { Link } from "react-router-dom";
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

export default function CategorySlider() {
  const mainCategory = [
    {
      name: "Elektronik",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/j-4GhgugfQ_1024x1024.png",
    },
    {
      name: "Ev & Yaşam",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/oZ4CLG763L_1024x1024.png",
    },
    {
      name: "Giyim & Aksesuar",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/K7Dojvagto_1024x1024.png",
    },
    {
      name: "Oto & Bahçe & Yapı",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/NY0jC-lxUV_1024x1024.png",
    },
    {
      name: "Anne & Bebek & Oyuncak",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/HypCfDo2sq_1024x1024.png",
    },
    {
      name: "Kozmetik & Kişisel Bakım",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/lgXbpkYp1d_1024x1024.png",
    },
    {
      name: "Kitap & Kırtasiye",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/aLjegjIe3Q_1024x1024.png",
    },
    {
      name: "Market",
      img: "https://api.a101kapida.com/dbmk89vnr/CALL/Image/get/BRNpLVW214_1024x1024.png",
    },
    { img: kampanya1, name: "Axess Kampanyası" },
    { img: kampanya4, name: "Akbank Kampanyası" },
    { img: kampanya3, name: "Kamp Alış verişi" },
    { img: kampanya2, name: "Mobilya Alış verişi" },
    { img: kampanya5, name: "Çeyiz alış verişi" },
    { img: kampanya6, name: "Sadece a101 ekstrada!" },
    { img: kampanya7, name: "Ucuzun da ucuzu fiyatlar!" },
    { img: kampanya8, name: "Ayın çok satanları" },
    { img: kampanya9, name: "Haftanın çok satanları" },
    { img: kampanya10, name: "Yeni gelen ürünler" },
    {
      img: kampanya11,
      name: 'Seçili kırtasiye ürünlerinde %50"e varan indirim',
    },
  ];

  return (
    <div className="pt-8 px-2">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        direction="horizontal"
        navigation={true}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        className="mySwiper catSlider"
      >
        {mainCategory &&
          mainCategory.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={item.slug} className="text-center block sm:w-24">
                <img
                  src={item.img}
                  className="rounded-xl h-[90px] object-cover "
                  alt={item.name}
                />
                <p className="text-[.8em] font-medium py-2">{item.name}</p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
