import React from 'react';
import Image from 'next/image';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { AddToCart } from '../cart/add-to-cart';
import './featured.css';

async function Featured() {
  const products = await getProducts({
    query: 'tag:featured AND tag:authentic_rug',
  });

  return (
    <div className='max-w-5xl mx-auto md:my-48 pattern ring'>
      <h2
        className='font-bold text-4xl mb-5 max-w-sm'
        data-scroll
        data-scroll-speed='0.45'
      >
        Featured Products This Week
      </h2>
      <section className='grid grid-cols-1 grid-rows-2     bg-amber-100/20'>
        {products.map((product, i) =>
          product === null ? null : (
            <Article key={product.id} product={product} reverse={i === 1} />
          )
        )}
      </section>
    </div>
  );
}

export default Featured;

function Article({
  product,
  reverse = false,
}: {
  reverse?: boolean;
  product: Product;
}) {
  return (
    <article className='grid grid-cols-1 md:grid-cols-2  '>
      <div className={`${reverse && 'md:order-2'} flex flex-col gap-3 p-10`}>
        <h2 className='text-xl font-bold max-w-xs'>{product.title}</h2>
        <p className='py-3'>{product.description.substring(0, 320) + '...'}</p>
        <p className='font-bold pb-3'>
          ${product.priceRange.maxVariantPrice.amount}{' '}
        </p>
        <AddToCart
          variants={product.variants}
          availableForSale={product.availableForSale}
        />
      </div>
      <div data-scroll data-scroll-speed='0.4'>
        <Image
          width={2000}
          height={2000}
          src={product.featuredImage.url}
          alt='Product Image'
          className={reverse ? '-translate-y-0' : '-translate-y-20'}
          priority={false}
          loading='lazy'
          blurDataURL={imagePlaceHolder}
        />
      </div>
    </article>
  );
}

const imagePlaceHolder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3C/svg%3E`;
