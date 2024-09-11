import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import Cart from './Cart';
function Highlights() {
  
    return (
        <div className='sm:p-3 md:px-0 py-3'>
            <h5 className='pb-3 font-medium text-base'>Öne Çıkanlar</h5>
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
                    1280: {
                        slidesPerView: 7,
                        spaceBetween: 7,
                    },
                }}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                mousewheel={true}
                modules={[Navigation,  Mousewheel]}
                className='mySwiper mainSlider'
            >

                {
                    new Array(10).fill(null).map((_,item) => <SwiperSlide key={item}  ><Cart/></SwiperSlide>)
                }
                
         
            </Swiper>
        </div>
    );
}

export default Highlights;
