import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function CategorySlider() {
    return (
        <div className='pt-8 px-2'>
            <Swiper
                slidesPerView={10}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
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
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/Elektronik.jpeg" className='rounded-xl' alt="" />
                        <p className='text-[.8em] font-medium py-2'>Elektronik</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center sm:w-24'>
                        <img src="src/assets/img/KüçükEvAletleri.jpeg" className='rounded-xl' alt=""  />
                        <p className='text-[.8em] font-medium py-2'>Küçük Ev Aletleri</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
