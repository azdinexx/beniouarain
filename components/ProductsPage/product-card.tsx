'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  handle: string;
  price: number;
  images: string[];
}
function Card({ title, handle, price, images }: Props) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <Link href={'products/' + handle}>
      <div
        className='group p-2 hover:ring-1     hover:shadow-lg transition duration-300 ease-in-out   flex flex-col justify-between rounded-xl hover:scale-110'
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <div className='w-full h-48 group-hover:rounded-md overflow-hidden'>
          <Image
            src={images[currentImage]}
            alt={title}
            width={700}
            height={700}
            className='w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110'
            loading='eager'
          />
        </div>
        <p className='mt-2 leading-5'>{title.substring(0, 35) + '..'}</p>
        <div className='flex justify-between py-2 '>
          <p className='text-xl font-[300]'>${price} USD</p>
          <button className='w-10 h-10   rounded-full flex justify-center items-center text-amber-300 group-hover:text-amber-400 group-hover:bg-amber-100 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 24 24'
              className='group-hover:-rotate-45 transition duration-300 ease-in-out'
            >
              <path
                fill='currentColor'
                d='M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z'
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
