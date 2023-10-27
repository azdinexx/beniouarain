'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'react-device-detect';
import { useScroll, motion, useTransform } from 'framer-motion';
import introImg from '@/public/images/pouf.webp';

export default function Index() {
  const { scrollYProgress } = useScroll();
  let y2 = useTransform(scrollYProgress, [0, 0.31], ['0%', '-100%']);
  let y1 = useTransform(scrollYProgress, [0, 0.21], ['0%', '-100%']);

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
      .from('#bg', { clipPath: `inset(15%)` })
      .to('#myImage', { rotation: isMobile ? 180 : 90 }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background} id='bg'>
        <Image
          src={'/images/bg.webp'}
          fill={true}
          alt='background image'
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <motion.div
          style={{ y: y2 }}
          ref={introImage}
          className={styles.introImage}
        >
          <Image
            src={introImg}
            alt='intro image'
            fill={true}
            priority={true}
            id='myImage'
          />
        </motion.div>
        <motion.h1 style={{ y: y1 }}>
          MOROCCAN <br /> HANDMADE <br /> RUGS
        </motion.h1>
      </div>
    </div>
  );
}
