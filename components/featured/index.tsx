import React from 'react';
import { getProducts } from '@/lib/shopify';
import { AddToCart } from '../cart/add-to-cart';
import './featured.css';
import { Article } from './article';
import { isMobile } from 'react-device-detect';

async function Featured() {
  const products = await getProducts({
    query: 'tag:authentic_rug',
  });

  return (
    <div className='max-w-7xl mx-auto md:my-48 p-4  flex flex-col md:gap-20  gap-10'>
      <h2
        className='font-bold text-4xl  max-w-sm'
        data-scroll
        data-scroll-speed='0.45'
      >
        Featured Products This Week
      </h2>
      <section className='grid md:gap-36 gap-10'>
        {products.map((product, i) =>
          product === null ? null : (
            <Article
              key={product.id}
              product={product}
              reverse={i % 2 === 1}
              handle={product.handle}
            >
              <AddToCart
                variants={product.variants}
                availableForSale={product.availableForSale}
                className='border w-full relative p-4 rounded-md bg-white '
              />
            </Article>
          )
        )}
      </section>
    </div>
  );
}

export default Featured;
