'use client';
import React from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { isMobile } from 'react-device-detect';

export function Locomotive({ children }: { children: React.ReactNode }) {
  const [dimension, setDimension] = React.useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (isMobile) {
      return;
    } else {
      const lenis = new Lenis();

      const raf = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', resize);
      requestAnimationFrame(raf);
      resize();
      return () => {
        window.removeEventListener('resize', resize);
      };
    }
  }, []);
  return <div>{children}</div>;
}
