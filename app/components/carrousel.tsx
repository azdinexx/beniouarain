'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from './hero/images/1.jpg';
import { isMobile } from 'react-device-detect';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Card from './shared/card';

const CarouselComponent = () => {
  return (
    <div className='container  my-10 mx-auto '>
      <div className='py-10 text-center font-bold uppercase text-2xl text-blue-500 '>
        {' '}
        New Arrivals
      </div>
      <Swiper
        slidesPerView={isMobile ? 1 : 4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper '
      >
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={img} title='the best pouf' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
