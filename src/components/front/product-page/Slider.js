import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs } from 'swiper/modules';
import './swiper-bundle.min.css';
import { useState } from 'react';

export default function Slider ({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs]}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                    <img src={image} alt={image}/>
                    </SwiperSlide>
                ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >{images.map((image) => (
                    <SwiperSlide key={image}>
                    <img src={image} alt={image}/>
                    </SwiperSlide>
                ))}
                </Swiper>
        </>
    )
}