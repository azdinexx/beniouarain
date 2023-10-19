import React from 'react';
import Image from 'next/image';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { AddToCart } from '../cart/add-to-cart';
import './featured.css';
import Link from 'next/link';
import { Article } from './article';

async function Featured() {
  const products = await getProducts({
    query: 'tag:authentic_rug',
  });

  return (
    <div className='max-w-5xl mx-auto md:my-48  p attern  '>
      <h2
        className='font-bold text-4xl mb-5 max-w-sm'
        data-scroll
        data-scroll-speed='0.45'
      >
        Featured Products This Week
      </h2>
      <section className='grid grid-cols-1   gap-20     '>
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
              />
            </Article>
          )
        )}
      </section>
    </div>
  );
}

export default Featured;
