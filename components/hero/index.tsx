import React from 'react';
import HoverCard from './hover-card';

function Hero() {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 h-[90vh] container  md:mx-auto gap-4 mb-10 w-full'>
      <HoverCard
        className=' md:col-span-2 md:row-span-2 '
        image='/hero/1.png'
        title='Welcome to the best website'
      />
      <HoverCard className='' image='/hero/2.jpg' title='Leather Pillows' />
      <HoverCard className='' image='/hero/3.jpg' title='Leather Poufs' />
      <HoverCard className='' image='/hero/4.jpg' title='New Arrivals' />
      <HoverCard className='' image='/hero/5.jpg' title='Moroccan Rugs' />
    </div>
  );
}

export default Hero;
