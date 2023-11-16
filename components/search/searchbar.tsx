import Link from 'next/link';
import { useState } from 'react';

export function SearchBar({ open }: { open: any }) {
  const [search, setSearch] = useState('');
  return (
    <div className='absolute z-10 hidden md:block md:bottom-20 md:left-4 w-full'>
      <div className='relative w-full'>
        <input
          onClick={open}
          placeholder='search..'
          type='text'
          value={search}
          onChange={(e) => {
            open();
            setSearch('');
          }}
          className=' w-full p-4 rounded-xl bg-white border shadow-2xl'
        />
        <button
          onClick={open}
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
        <Link
          href={'/all'}
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
        </Link>
      </div>
    </div>
  );
}
