import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay ,Navigation} from 'swiper/modules'


import One from '../Assets/images/png/th (1).jpg'
import One1 from '../Assets/images/png/th (2).jpg'
import One2 from '../Assets/images/png/th (3).jpg'
import One3 from '../Assets/images/png/th (4).jpg'
import One4 from '../Assets/images/png/th (5).jpg'
import One5 from '../Assets/images/png/th (6).jpg'
import One6 from '../Assets/images/png/th (7).jpg'
import One7 from '../Assets/images/png/th.jpg'


const Slider = () => {
  return (
      <section>
        <button className='next-btn'>Next</button>
        <button className='pre-btn'>Pre</button>
         <Swiper
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
    //   centeredSlides={true}
      navigation={{
        nextEl:'.next-btn',
        prevEl:'.pre-btn'
      }}



      autoplay={{delay:1000 ,disableOnInteraction:false}}
      speed={2000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[ Autoplay ,Navigation]}
    >
      <SwiperSlide><div className="box"> <img src={One} alt="" className='' /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One1} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One2} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One3} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One4} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One5} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One6} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="box"> <img src={One7} alt="" /></div></SwiperSlide>
      ...
    </Swiper>

    </section>
  )
}

export default Slider