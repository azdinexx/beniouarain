'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';
import Image from 'next/image';

const phrases = [
  'Handmade rugs from Morocco',
  'Marrakesh Made ',
  'The High Atlas Mountains ',
  'Tailored to your needs',
  'Moroccan artisans',
];

export default function Index() {
  const RightImage = useRef(null);
  useLayoutEffect(() => {
    gsap.from(RightImage.current, {
      scrollTrigger: {
        trigger: RightImage.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=800px bottom',
      },
      right: '-200px',
      rotation: 180,
      ease: 'power3.Out',
    });
  }, []);

  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}

      <Image
        ref={RightImage}
        width={500}
        height={500}
        alt=''
        src={'/images/pouf.webp'}
        className='absolute top-0 right-0 z-100'
      />
    </div>
  );
}

function AnimatedText({ children }: { children: string }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
