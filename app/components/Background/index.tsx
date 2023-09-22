'use client';
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';

function Background() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#bg',
        scrub: true,
        start: 'top top',
        end: '+=500px',
      },
    });

    timeline.to('#hero', { clipPath: `circle(50% at 50% 50%)` });
  }, []);

  return (
    <div
      className='h-screen w-screen container mx-auto flex items-center justify-center'
      id='hero'
    >
      <Image
        src={'/images/home.jpg'}
        width={2000}
        height={2000}
        alt='background for the home'
        className='object-cover w-full h-full'
      />
    </div>
  );
}

export default Background;
