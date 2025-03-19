import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { SliderProps } from '../../types/components';

export const Slider: React.FC<SliderProps> = ({listImages})=>{
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        loop={true}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
      >
        {
          listImages.map(item=>(
            <SwiperSlide key={item.id}>
              <img className='slider-item-image' src={item.image} alt='portada del slider'/>
            </SwiperSlide>
          ))
        }

      </Swiper>
  );
}

