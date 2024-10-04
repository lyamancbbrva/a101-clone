import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { getSlider } from '../../api/api';

export default function MainSlider() {

    const [slider, setSlider] = useState([])

    useEffect(() => {
        getSlider().then(resp => setSlider(resp))
        
    }, [])
    
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
                loop={true}
                // spaceBetween={30} 
                autoplay={{ 
                    delay: 3000, 
                    // disableOnInteraction: false 
                }}
                mousewheel={
                    {
                        forceToAxis: true,
                        releaseOnEdges: true
                    }
                }
                direction="horizontal"
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper mainSlider"
            >
                {
                    slider.map((item, i) => <SwiperSlide key={i}><img className='rounded-e-2xl rounded-es-2xl object-cover h-[40vh] sm:h-[50vh] md:h-[35vh] lg:h-[40vh] xl:h-[52vh]  ' src={item.img} alt={item.img} /></SwiperSlide>)
                }
                
             
            </Swiper>
        </section>
    );
}
