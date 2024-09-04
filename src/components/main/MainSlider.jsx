import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MainSlider() {
    return (
        <section className='py-8 px-2'>  
            <div className='flex overflow-x-auto no-scrollbar'>
                <button className='px-4 py-1.5 text-nowrap cursor-pointer text-[.9em] bg-[#00BAD3] text-white rounded-t-md'>Aldın Aldın</button>
                <button className='px-4 py-1.5 text-nowrap cursor-pointer text-[.9em]'>Kampanyalar</button>
                <button className='px-4 py-1.5 text-nowrap cursor-pointer text-[.9em]'>Öne Çıkanlar</button>
                <button className='px-4 py-1.5 text-nowrap cursor-pointer text-[.9em]'>Markalar</button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                pagination={{clickable: true,}}
                autoplay={{ 
                    delay: 5000, 
                    disableOnInteraction: false 
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-e-2xl rounded-es-2xl' src="src/assets/img/slider2.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
}
