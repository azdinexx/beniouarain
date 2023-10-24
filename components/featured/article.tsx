'use client';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

interface Props {
  reverse?: boolean;
  product: Product;
  handle: string;
  children: React.ReactNode;
}
export function Article({ product, reverse = false, handle, children }: Props) {
  const image = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: image,
    offset: ['end end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, (height - 100) * 0.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, (height - 200) * 0.6]);
  useEffect(() => {
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
  }, []);
  return (
    <article className='grid grid-cols-1 md:grid-cols-2   overflow-hidden'>
      <div className={`${reverse && 'md:order-2'} flex flex-col gap-3 p-10`}>
        <Link href={'/all/' + handle}>
          <h2 className='text-xl font-bold max-w-xs hover:underline'>
            {product.title}
          </h2>
        </Link>
        <p className='py-3'>{product.description.substring(0, 320) + '...'}</p>
        <p className='font-bold pb-3'>
          ${product.priceRange.maxVariantPrice.amount}{' '}
        </p>
        {children}
      </div>
      <motion.div
        className='relative'
        ref={image}
        style={reverse ? { y: y } : { y: y2 }}
      >
        <Image
          width={2000}
          height={2000}
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          className={reverse ? '-translate-y-0' : '-translate-y-20'}
          priority={false}
          loading='lazy'
          blurDataURL={imagePlaceHolder}
        />
      </motion.div>
    </article>
  );
}

const imagePlaceHolder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3C/svg%3E`;
