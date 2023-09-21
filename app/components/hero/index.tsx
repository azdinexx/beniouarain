import React from 'react';
import HoverCard from './hover-card';
import image3 from '../../../public/moroccan.jpg';
import hero from './images/hero.png';
import image2 from './images/2.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

function Hero() {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 h-[90vh] container  md:mx-auto gap-4 mb-10 w-full'>
      <HoverCard
        className=' md:col-span-2 md:row-span-2 '
        image={hero}
        title='Welcome to the best website'
      />
      <HoverCard className='' image={image2} title='Leather Pillows' />
      <HoverCard className='' image={image3} title='Leather Poufs' />
      <HoverCard className='' image={image4} title='New Arrivals' />
      <HoverCard className='' image={image5} title='Moroccan Rugs' />
    </div>
  );
}

export default Hero;
