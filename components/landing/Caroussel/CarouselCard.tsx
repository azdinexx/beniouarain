import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import React from 'react';

function CarouselCard({ product }: { product: Product }) {
  return (
    <div className='flex-none carousel-item w-1/2   snap-x  md:w-1/4'>
      <a href={'/all/' + product.handle}>
        <div className='aspect-square border relative'>
          <Image
            width={500}
            height={500}
            src={product.images[0].url}
            alt={product.title}
            className='absolute top-0 left-0 w-full h-full  object-cover'
          />
        </div>
      </a>
      <a href={'/all/' + product.handle}>
        <h3>{product.title}</h3>
      </a>
    </div>
  );
}

export default CarouselCard;
