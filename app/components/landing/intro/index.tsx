'use client';
import bg from '../../../../public/images/bg.jpg';
import intro from '../../../../public/images/pouf.png';
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
        end: isMobile ? '+=200' : '+=500px',
      },
    });

    timeline
      .from('#bg', { clipPath: isMobile ? `inset(5%)` : `inset(15%)` })
      .to('#myImage', { rotation: 90 }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background} id='bg'>
        <Image src={bg} fill={true} alt='background image' priority={true} />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed='0.4'
          className={styles.introImage}
        >
          <Image
            src={intro}
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
