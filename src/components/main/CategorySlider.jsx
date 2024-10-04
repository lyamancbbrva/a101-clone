import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/api';
import { Link } from 'react-router-dom';

export default function CategorySlider({mainCategory}) {


    console.log(mainCategory);
    
    

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
                            <img src={item.img} className='rounded-xl h-[90px] object-cover ' alt={item.slug.split('/'.at(0))} />
                            <p className='text-[.8em] font-medium py-2'>{item.slug.split('/').at(0)}</p>
                        </Link>
                    </SwiperSlide> )
                }         
            </Swiper>
        </div>
    );
}
