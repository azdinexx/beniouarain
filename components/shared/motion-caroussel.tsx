'use client';
import { Product } from '@/lib/shopify/types';
import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

function MotionCaroussel({ products }: { products: Product[] }) {
  const [current, setCurrent] = React.useState(0);
  const [product, setProduct] = React.useState(products[current]);
  const length = products.length;
  const [prevORnext, setPrevORnext] = React.useState<'prev' | 'next'>('next');

  const next = () => {
    setPrevORnext('next');
    setProduct(products[current]);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previous = () => {
    setPrevORnext('prev');
    setProduct(products[current]);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className='relative h-96 bg-red-  flex justify-center items-center   '>
      <button
        className='text-sm z-10 bg-gray-50 absolute top-1/2 right-3 border rounded-2xl py-1 px-2 '
        onClick={next}
      >
        next
      </button>
      <button
        className='text-sm z-10 bg-gray-50  absolute top-1/2 left-3 border rounded-2xl py-1 px-2 '
        onClick={previous}
      >
        previous
      </button>
      <div className=' relative overflow-hidden h-96  aspect-square'>
        <AnimatePresence>
          <motion.div
            className='  absolute w-full h-full   border p-2  flex flex-col items-center justify-center bg-gray-50'
            key={product.id + current}
            initial={prevORnext}
            animate='visible'
            exit={prevORnext === 'prev' ? 'next' : 'prev'}
            variants={{
              prev: {
                opacity: 0,
                x: -100,
              },

              next: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={300}
              height={300}
            />
            <p>
              {product.title} {product.priceRange.minVariantPrice.amount}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default MotionCaroussel;
