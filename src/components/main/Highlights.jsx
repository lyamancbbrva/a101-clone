import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import Cart from './Cart';
function Highlights() {
  
    return (
        <div className='p-3'>

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
