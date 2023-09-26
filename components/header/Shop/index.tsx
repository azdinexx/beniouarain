'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import ShopCard from './shop-card';
import Link from 'next/link';

function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    setIsOpen(true);
    // If there's a timeout in progress, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    // Delay the closing action by 500 milliseconds (adjust as needed)
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);

    // Save the timeout ID so it can be cleared if the mouse enters again
    setTimeoutId(id);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className='bg-amber-200/20 px-4 py-1 text-amber-900 active:scale-95'>
        Shop
      </button>
      <div
        className={` absolute left-0 top-20 w-full h-[300px]  shadoworigin-top-bottom  right-0 mt-2   shadow bg-white ${
          isOpen
            ? 'opacity-100 translate-y-0  scale-100'
            : 'opacity-0 -translate-y-8 pointer-events-none scale-75'
        } transition-transform  duration-100 ease-in-out z-10 flex flex-col`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className='grid h-48 grid-cols-5 gap-5 mt-6 grid-rows-1 place-content-end text-4xl'>
          <ShopCard img='/hero/2.jpg' title='Rugs' />
          <ShopCard img='/hero/5.jpg' title='Poufs' />
          <ShopCard img='/hero/4.jpg' title='Pillows' />
          <ShopCard img='/hero/5.jpg' title='Best Selling' />
          <div className='bg-amber-50 flex items-center justify-center mr-5 rounded-md'>
            <button className='bg-amber-500 text-white px-6 py-2 text-lg rounded-full hover:bg-amber-300'>
              Discover All
            </button>
          </div>
        </section>
        <div className='w-full mx-auto flex justify-between max-w-sm gap-6 text-gray-600 mt-auto mb-6 '>
          <PolicyLink title='contact us' href='/contact-us' />
          <PolicyLink title='privacy Policy' href='/policies/privacy-policy' />
          <PolicyLink title='return Policy' href='/policies/return-policy' />
          <PolicyLink
            title='shipping Policy'
            href='/policies/shipping-policy'
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;

function PolicyLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} target='_blank'>
      <small className='hover:text-amber-500 cursor-pointer'>{title}</small>
    </Link>
  );
}
