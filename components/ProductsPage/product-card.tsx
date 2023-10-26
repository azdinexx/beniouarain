'use client';
import { Image as Img } from '@/lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  title: string;
  handle: string;
  price: string;
  images: Img[];
}
function Card({ title, handle, price, images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <a href={'all/' + handle}>
      <div
        className='group p-2 md:hover:ring-1     md:hover:shadow-lg transition duration-300 ease-in-out   flex flex-col justify-between rounded-xl md:hover:scale-110'
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <div className='w-full relative aspect-square md:group-hover:rounded-md rounded-[3px] overflow-hidden'>
          {loading && (
            <div className='absolute text-transparent top-0 left-0 animate-pulse bg-gray-50 w-full h-full'>
              this text is hidden
            </div>
          )}
          <Image
            src={images[currentImage].url}
            alt={title}
            width={700}
            height={700}
            className='w-full h-full object-cover transition-all duration-300 ease-in-out md:group-hover:scale-110'
            loading='lazy'
            onLoad={handleLoad}
          />
        </div>
        <p className='mt-2 leading-5'>{title.substring(0, 45) + '..'}</p>
        <div className='flex justify-between py-2 items-end '>
          <p className='text-xl font-[300]'>${price} USD</p>
          <div className='flex gap-3'>
            {/* the add to cart button */}

            <button className='w-10 h-10   rounded-full flex justify-center items-center text-transparent md:group-hover:text-amber-900 hover:bg-amber-900/10  '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M11 6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9q-.425 0-.713-.288T11 8V6ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7l3.625-6.5q.125-.25.35-.375T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7q-1.125 0-1.713-.975T5.25 14.05L6.6 11.6L3 4Z'
                />
              </svg>
            </button>
            {/* the arrow button */}

            <button className='w-10 h-10   rounded-full flex justify-center items-center text-amber-300/40 md:group-hover:text-amber-400 md:group-hover:bg-amber-100  hover:bg-amber-300/10 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 24 24'
                className='md:group-hover:-rotate-45 transition duration-300 ease-in-out'
              >
                <path
                  fill='currentColor'
                  d='M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
