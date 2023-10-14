import React from 'react';
import { AddToCart } from '@/components/cart/add-to-cart';
import { Product } from '@/lib/shopify/types';
import BuyItNow from './BuyItNow';

function Details({ product }: { product: Product }) {
  const { title, description, id } = product;

  return (
    <div className=' col-span-2 p-6  flex flex-col gap-5  shadow-sm rounded-md '>
      <h1 className=' text-xl  font-semibold leading-6'>{title}</h1>
      <div className='text-xl mb-6'>
        ${product.variants[0].price.amount} USD
      </div>

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />

      <BuyItNow id={product.variants[0].id} />

      <p className='text-md font-[300]'>{description}</p>
    </div>
  );
}

export default Details;
