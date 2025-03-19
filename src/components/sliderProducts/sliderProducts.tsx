import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './sliderProducts.css'
import { SliderProductsProps } from "../../types/components";
import { CardProduct } from "../cardProduct/cardProduct";

export const SliderProducts: React.FC<SliderProductsProps> = ({listItem})=>{
    return(
      <Swiper
      slidesPerView={2}
      spaceBetween={10}
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      className="slider-products"
      breakpoints={{
        830: {
          slidesPerView: 5,
          spaceBetween: 10
        },
        495:{
          slidesPerView: 3,
          spaceBetween: 10
        }
      }}
    >
      {
        listItem.map(item=>(
          <SwiperSlide key={item.id}>
            <CardProduct 
            id={item.id}
            image={item.image}
            imageDescription={item.imageDescription}
            title={item.title}
            price={item.price}
            priceDiscounted={item.priceDiscounted}
            isShipment={item.isShipment}
            nameBank={item.nameBank}
            size="full"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    )
}