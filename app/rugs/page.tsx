'use client';
import React from 'react';
import { useEffect } from 'react';
import Intro from '../components/landing/intro';
import Description from '../components/landing/description';
import Products from '../components/landing/products';

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
      <Products />
    </main>
  );
}

export default Page;
