'use client';
import React from 'react';
import { useEffect } from 'react';
import Intro from '../components/landing/intro';
import Description from '../components/landing/description';

function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Intro />
      <Description />
      <div className='mt-[100vh]'></div>
    </main>
  );
}

export default Page;
