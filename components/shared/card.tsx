import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { AddShoppingCart } from './addCart';
import { ArrowOutwardRounded } from './arrow';

function Card({ image, title }: { image: string; title: string }) {
  return (
    <div className='relative w-full md:w-72 h-72 group overflow-hidden'>
      <Link href='#'>
        <div className='absolute z-10 right-5 top-5  md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'>
          <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <span className='text-2xl bg-white font-bold text-black hover:text-blue-500 hover:bg-white/80 p-2 rounded-full'>
              <AddShoppingCart />
            </span>
            <span className='text-2xl bg-white font-bold text-black hover:text-blue-500 hover:bg-white/80 p-2 rounded-full'>
              <ArrowOutwardRounded />
            </span>
          </div>
        </div>

        <Image
          src={image}
          height={400}
          width={400}
          alt={title}
          className='object-cover h-full w-full  absolute top-0 left-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300'
        />
        <div className='absolute w-full h-full bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'></div>
        <div className='  text-white absolute bottom-5 left-5 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1'>
          <span className='font-bold text-xl'>{title}</span>
          <span className='font-thin text-md'>$9.99</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
