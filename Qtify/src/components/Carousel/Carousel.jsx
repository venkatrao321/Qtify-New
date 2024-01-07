import React, { useEffect } from "react";
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeftArrow from '../../assets/leftArrow.svg'
import RightArrow from '../../assets/rightArrow.svg'
import './Carousel-module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel({ data, component }) {  
  return (
    <div  className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={11}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
        virtual
      >
        {data.map((ele) => {
          return( <div key={ele.id}>
            <SwiperSlide>{component(ele)}</SwiperSlide>
          </div>);
        })}
      <button  className="arrow-left arrow"><img src={LeftArrow} alt="Prev" /></button>
      <button  className="arrow-right arrow"><img src={RightArrow} alt="Next" /></button>
      </Swiper>
    </div>
  );
}
export default Carousel;
