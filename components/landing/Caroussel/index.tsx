'use client';
import React from 'react';
import CarouselCard from './CarouselCard';
import { Product } from '@/lib/shopify/types';

function Caroussel({ products }: { products: Product[] }) {
  const [transform, setTransform] = React.useState('');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');

  function updateCarousel() {
    const itemWidth = (items[0] as HTMLElement).offsetWidth;
    setTransform(`translateX(-${itemWidth * currentIndex}px)`);
  }
  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };
  return (
    <div className='relative overflow-hidden flex w-full'>
      <button
        className='absolute z-30 right-6 top-1/3 text-white'
        onClick={nextSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12m2 0a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8m6 5l5-5l-5-5v10Z'
          />
        </svg>
      </button>
      <button
        className='absolute z-30 left-6 top-1/3 text-white'
        onClick={prevSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M22 12A10 10 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10m-2 0a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8m-6-5l-5 5l5 5V7Z'
          />
        </svg>
      </button>
      <section
        style={{ transform }}
        id='section'
        className='flex  transition-transform ease duration-500'
      >
        {products.map((product, i) => {
          return <CarouselCard key={product.id} product={product} />;
        })}
      </section>
    </div>
  );
}

export default Caroussel;
