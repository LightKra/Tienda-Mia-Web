import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import portada1 from '../assets/portada1.jpg';
import portada2 from '../assets/portada2.png';
import portada3 from '../assets/portada3.jpeg';

const portadas = [
  {id: 1, image: portada1},
  {id: 2, image: portada2},
  {id: 3, image: portada3}
]

export const Slider: React.FC = ()=>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  container"
      >
        {
          portadas.map(item=>(
            <SwiperSlide key={item.id}>
              <img className='slider-item-image' src={item.image} alt='portada del slider'/>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}

