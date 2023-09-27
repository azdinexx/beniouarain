'use client';
import Description from '@/components/landing/description';
import Intro from '@/components/landing/intro';
import Products from '@/components/landing/products';
import React from 'react';
import { useEffect } from 'react';

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
    </main>
  );
}

export default Page;
