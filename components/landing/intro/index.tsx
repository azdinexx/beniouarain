'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'react-device-detect';

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#bg',
        scrub: true,
        start: 'top top',
        end: isMobile ? '+=20' : '+=500px',
      },
    });

    timeline
      .from('#bg', { clipPath: `inset(15%)` })
      .to('#myImage', { rotation: isMobile ? 180 : 90 }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background} id='bg'>
        <Image
          src={'/images/bg.jpg'}
          fill={true}
          alt='background image'
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed='0.4'
          className={styles.introImage}
        >
          <Image
            src={'/images/pouf.png'}
            alt='intro image'
            fill={true}
            priority={true}
            id='myImage'
          />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>
          MOROCCAN <br /> HANDMADE <br /> RUGS
        </h1>
      </div>
    </div>
  );
}
