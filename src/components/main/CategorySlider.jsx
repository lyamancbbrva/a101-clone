import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/api';
import { Link } from 'react-router-dom';

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
      ];
    
    

    return (

        <div className='pt-8 px-2'>
            <Swiper
                slidesPerView={10}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                mousewheel={
                    {
                        forceToAxis: true,
                        releaseOnEdges: true
                    }
                }
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
                {
                    mainCategory && mainCategory.map((item, i) => <SwiperSlide key={i}>
                        <Link to={item.slug} className='text-center block sm:w-24'>
                            <img src={item.img} className='rounded-xl h-[90px] object-cover ' alt={item.name} />
                            <p className='text-[.8em] font-medium py-2'>{item.name}</p>
                        </Link>
                    </SwiperSlide> )
                }         
            </Swiper>
        </div>
    );
}
