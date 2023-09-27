'use client';
import { ReactNode, useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';

function Locomotive({ children }: { children: ReactNode }) {
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
  return <>{children}</>;
}

export default Locomotive;
