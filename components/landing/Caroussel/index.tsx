'use client';
import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard'; // Make sure to import your CarouselCard component
import { Product } from '@/lib/shopify/types';

function Carousel({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll('.carousel-item');

    function updateCarousel() {
      setItemWidth((items[0] as HTMLElement)?.offsetWidth || 0);
    }

    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => {
      window.removeEventListener('resize', updateCarousel);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='relative overflow-hidden flex w-full  shadow p-10'>
      <button
        className='absolute z-30 right-6 top-1/2 bg-white aspect-square rounded-full shadow-md p-1'
        onClick={nextSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z'
          />
        </svg>
      </button>
      <button
        className='absolute z-30 left-6 top-1/2 bg-white aspect-square rounded-full shadow-md p-1'
        onClick={prevSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z'
          />
        </svg>
      </button>
      <section
        style={{ transform: `translateX(-${itemWidth * currentIndex}px)` }}
        id='section'
        className='flex  transition-transform ease duration-500 gap-8'
      >
        {products.map((product, i) => {
          return <CarouselCard key={product.id} product={product} />;
        })}
      </section>
    </div>
  );
}

export default Carousel;
