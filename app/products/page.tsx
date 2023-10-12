import React from 'react';
import Hero from '@/components/ProductsPage/hero';

import Card from '@/components/ProductsPage/product-card';
import { getProducts } from '@/lib/shopify';

import { Product } from '@/lib/shopify/types';

async function ProductList() {
  const data = await getProducts({
    query: 'title: "rug" OR "blanket"',
    sortKey: 'PRICE',
  });

  return (
    <div className='flex flex-col '>
      <Hero />
      <p className='mt-2 text-gray-500'>{data.length} products</p>
      <div className='grid grid-cols-4 gap-5 p-8'>
        {data.length === 0 ? (
          <div className='text-center'>No products found</div>
        ) : (
          data.map((product: Product) => {
            return (
              <Card
                key={product.id}
                title={product.title}
                images={product.images.map((image) => image)}
                handle={product.handle}
                price={product.variants[0].price.amount}
              />
            );
          })
        )}
      </div>
      <div className='flex items-center justify-center gap-5'>
        <button className='bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-400  '>
          Next
        </button>
        <button className='bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-400  '>
          Prev
        </button>
      </div>
    </div>
  );
}

export default ProductList;
