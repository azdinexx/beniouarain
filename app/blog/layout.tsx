import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link
        href={'/all'}
        className='w-full text-lg h-20 bg-amber-500 max-w-xs mx-auto my-10 rounded-xl flex items-center justify-center text-white gap-3 shadow-lg'
      >
        <p className='font-bold capitalize'>go to shop</p>{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
          className='rotate-90 '
        >
          <path
            fill='currentColor'
            d='m12 2l4 4h-3v7.82l9.39 5.43l-1 1.75L12 15.56L2.61 21l-1-1.75L11 13.82V6H8l4-4Z'
          />
        </svg>
      </Link>
    </>
  );
}
