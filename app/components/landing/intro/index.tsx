'use client';
import bg from '../../../../public/images/bg.jpg';
import intro from '../../../../public/images/intro.jpg';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        end: '+=500px',
      },
    });

    timeline
      .from('#bg', { clipPath: `inset(15%)` })
      .to(introImage.current, { height: '200px' }, 0);
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
          data-scroll-speed='0.3'
          className={styles.introImage}
        >
          <Image src={intro} alt='intro image' fill={true} priority={true} />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>
          MOROCCAN <br /> HANDMADE <br /> RUGS
        </h1>
      </div>
    </div>
  );
}
