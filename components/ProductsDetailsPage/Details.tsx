import React from 'react';
import { AddToCart } from '@/components/cart/add-to-cart';
import { Product } from '@/lib/shopify/types';

function Details({ product }: { product: Product }) {
  const { title, description, id } = product;

  return (
    <div className=' col-span-2 p-6  flex flex-col gap-5  shadow-sm rounded-md '>
      <h1 className='text-3xl font-[300]'>{title}</h1>
      <div className='  text-xl'>${product.variants[0].price.amount} USD</div>

      <div className=' w-min'>
        <small className=''>Quantity</small>
        <div className='  p-3 rounded-lg flex text-lg bg-slate-50/50 shadow-md'>
          <button className='w-8 h-8   text-lg bg-slate-100/80 active:scale-90 hover:bg-slate-100 rounded-full'>
            -
          </button>
          <span className='px-6  '>1</span>
          <button className='w-8 h-8   text-lg bg-slate-100/80 active:scale-90 hover:bg-slate-100 rounded-full'>
            +
          </button>
        </div>
      </div>

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />

      <button className='  py-3 rounded-lg bg-amber-400 hover:bg-amber-400/80 shadow-md active:scale-90'>
        Buy It Now
      </button>

      <p className='text-md font-[300]'>{description}</p>
    </div>
  );
}

export default Details;
