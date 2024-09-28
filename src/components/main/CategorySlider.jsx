import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/api';

export default function CategorySlider() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategories().then(res => setCategory(res))
    }, [])
    console.log(category);
    

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
                    category && category.map((item, i) => <SwiperSlide key={i}>
                        <div  className='text-center sm:w-20'>
                            <img src={item.img[0]} className='rounded-xl h-[100px] object-cover ' alt="" />
                            <p className='text-[.8em] font-medium py-2'>{item.name}</p>
                        </div>
                    </SwiperSlide> )
                }         
            </Swiper>
        </div>
    );
}
