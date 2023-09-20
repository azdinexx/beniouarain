import React from 'react';
import HoverCard from './hover-card';
import image3 from '../../../public/moroccan.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

function Hero() {
  return (
    <div className='grid grid-cols-4 grid-rows-2 h-[90vh] container mx-auto gap-4 mb-10 '>
      <HoverCard
        className=' col-span-2 row-span-2 '
        image={image1}
        title='Welcome to the best website'
      ></HoverCard>
      <HoverCard
        className=''
        image={image2}
        title='Leather Pillows'
      ></HoverCard>
      <HoverCard className='' image={image3} title='Leather Poufs'></HoverCard>
      <HoverCard className='' image={image4} title='New Arrivals'></HoverCard>
      <HoverCard className='' image={image5} title='Moroccan Rugs'></HoverCard>
    </div>
  );
}

export default Hero;
