import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';

function Highlights({basket, setBasket}) {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts().then(res => setData(res.products))
    
    }, [])
    

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
                    1024:{
                        slidesPerView: 6,
                        spaceBetween: 7,
                    },

                    1280: {
                        slidesPerView: 7,
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
                modules={[Navigation, Mousewheel]}
                className='mySwiper mainSlider'
            >
                {
                    data?.length == 0 ? <div className="loader m-auto py-2"></div> :
                    data?.map((item) => <SwiperSlide key={item.id}><Cart item={item} basket={basket} setBasket={setBasket} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}

export default Highlights;
