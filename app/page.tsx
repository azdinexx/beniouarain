'use client';
import Background from '../components/Background';
import Image from 'next/image';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#image',
        scrub: true,
        start: 'top top',
        end: '0',
        pin: true,
      },
    });

    timeline
      .from('#image', {
        x: '-100%',
      })
      .to('#image', { y: '100%' });
  }, []);

  return (
    <main className='flex flex-col gap-1'>
      <Background />
      <div className='w-full h-screen '>
        <Image
          width={600}
          height={600}
          alt='background for the home'
          className='object-cover w-72 h-72'
          src={'/images/pouf.png'}
        />
      </div>
    </main>
  );
}
