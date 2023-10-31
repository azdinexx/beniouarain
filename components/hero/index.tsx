import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section className='min-h-[80vh] flex md:my-16 md:mx-0 mx-6 my-10'>
      <div className='md:w-2/3 relative  after:w-48 after:h-48 after:absolute after:-top-4 after:-right-4 after:border-t after:border-r flex gap-6 items-end'>
        <div className='md:w-1/3 h-full  relative'>
          <div className='absolute md:top-[10%] top-6 md:left-4 left-10 z-10'>
            <h1 className='md:text-8xl text-6xl font-bold '>Beniourain</h1>
            <p className='md:text-6xl text-4xl font-[200]'>Moroccan Rugs</p>
          </div>
          <SearchBar />
        </div>
        <div className='bg-green-100  relative  md:w-2/3  h-full before:absolute before:-z-10  before:-bottom-4 before:-left-4 before:w-full  before:h-full before:bg-amber-50 flex items-center justify-center'>
          <Image
            src={'/images/pouf.webp'}
            height={500}
            width={500}
            alt='pouf'
            loading='eager'
          />
        </div>
      </div>
      <div className='absolute md:relative w-[90%] bottom-0   md:w-1/3  flex flex-col p-9 gap-4  '>
        <p className='mt-auto hidden md:block'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia
          voluptates laborum quae voluptas aspernatur corporis praesentium
          minima quidem libero, quod a dicta laboriosam, aperiam delectus
          repellendus esse quisquam nisi!
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

function SearchBar() {
  return (
    <div className='absolute z-10 hidden md:block md:bottom-20 md:left-4 w-full'>
      <div className='relative w-full'>
        <input
          placeholder='search..'
          type='text'
          className=' w-full p-4 rounded-xl bg-white border shadow-2xl'
        />
        <button
          className=' bg-amber-50 p-4  absolute right-2 top-0 border-y border-l  rounded-sxl text-green-900'
          aria-label='click to search or press enter'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M17 22v-2h3v-3h2v3.5c0 .39-.16.74-.46 1.04c-.3.3-.65.46-1.04.46H17M7 22H3.5c-.39 0-.74-.16-1.04-.46c-.3-.3-.46-.65-.46-1.04V17h2v3h3v2M17 2h3.5c.39 0 .74.16 1.04.46c.3.3.46.65.46 1.04V7h-2V4h-3V2M7 2v2H4v3H2V3.5c0-.39.16-.74.46-1.04c.3-.3.65-.46 1.04-.46H7m3.5 4C13 6 15 8 15 10.5c0 .88-.25 1.7-.69 2.4l3.26 3.26l-1.41 1.41l-3.26-3.26c-.7.44-1.52.69-2.4.69C8 15 6 13 6 10.5S8 6 10.5 6m0 2a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5Z'
            />
          </svg>
        </button>
        <button
          className='  p-4 bg-white  absolute -translate-x-2  top-0 border rounded-e-2xl '
          aria-label='click here to discover all products'
        >
          <p className='flex text-green-800'>
            discover{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z'
              />
            </svg>
          </p>
        </button>
      </div>
    </div>
  );
}
