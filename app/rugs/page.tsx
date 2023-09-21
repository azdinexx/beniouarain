'use client';
import React from 'react';
import { useEffect } from 'react';

function Page() {
  useEffect(() => {
    (async () => {
      const L = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new L();
    })();
  }, []);
  return (
    <div className='flex flex-col gap-10'>
      <div className='bg-orange-500 w-full h-screen '></div>
      <div className='bg-orange-500 w-full h-screen '></div>
      <div className='bg-orange-500 w-full h-screen '></div>
      <div className='bg-orange-500 w-full h-screen '></div>
      <div className='bg-orange-500 w-full h-screen '></div>
    </div>
  );
}

export default Page;
