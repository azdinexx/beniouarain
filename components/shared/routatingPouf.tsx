'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
function RoutatingPouf() {
  return (
    <motion.img
      src={'/images/pouf.webp'}
      height={500}
      width={500}
      alt='pouf'
      loading='eager'
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: 'backInOut',
      }}
    />
  );
}

export default RoutatingPouf;
