import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderBrands.css'
import { sliderBrandsData } from "./sliderBrandsData";

export const SliderBrands: React.FC = ()=>{
    return(
        <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={10}
        loop={true}
        breakpoints={{
            915: {
                slidesPerView: 10,
                spaceBetween: 5
            },
            400: {
                slidesPerView: 7,
                spaceBetween: 5
            },
            300:{
                slidesPerView: 4,
                spaceBetween: 5
            }   
        }}
        className="slider-brands"
        >
            {
                sliderBrandsData.map(item=>(
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.alt}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}