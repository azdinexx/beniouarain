import React from 'react';
import Link from 'next/link';
import RoutatingPouf from '../shared/routatingPouf';
import Search from '../search';
import { SearchProductso } from '@/lib/actions';

function Hero() {
  return (
    <section className='min-h-[80vh] flex md:my-16 md:mx-0 mx-6 my-10'>
      <div className='md:w-2/3 relative  after:w-48 after:h-48 after:absolute after:-top-4 after:-right-4 after:border-t after:border-r flex gap-6 items-end'>
        <div className='md:w-1/3 h-full  relative'>
          <div className='absolute md:top-[10%] top-6 md:left-4 left-10 z-10'>
            <h1 className='md:text-8xl text-6xl font-bold '>Beniourain</h1>
            <p className='md:text-6xl text-4xl font-[200]'>Moroccan Rugs</p>
          </div>
          <Search SearchProducts={SearchProductso} />
        </div>
        <div className='bg-green-100  relative  md:w-2/3  h-full before:absolute before:-z-10  before:-bottom-4 before:-left-4 before:w-full  before:h-full before:bg-amber-50 flex items-center justify-center'>
          <RoutatingPouf />
        </div>
      </div>
      <div className='absolute  md:relative w-[90%] bottom-0   md:w-1/3  flex flex-col p-9 gap-4  '>
        <p className='mt-auto hidden md:block'>
          We are proud to offer a wide variety of Moroccan rugs, including
          traditional Beni Ourain rugs, colorful Azilal rugs, and intricate
          Boucherouite rugs. Our rugs are all hand-knotted by skilled Moroccan
          artisans and are made from high-quality natural materials, such as
          wool and silk.
        </p>
        <Link
          href={'/all'}
          className='p-5  capitalize bg-amber-50 shadow-2xl rounded-xl text-center hover:bg-amber-100/70 font-semibold'
        >
          Shop Now!
        </Link>
      </div>
    </section>
  );
}

export default Hero;
