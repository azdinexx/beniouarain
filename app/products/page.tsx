import React from 'react';
import { parseShopifyResponse, shopifyClient } from '../../lib/shopify';
import { Product } from '@/types/state';
import Image from 'next/image';
import Hero from '@/components/ProductsPage/hero';
import Link from 'next/link';

async function ProductList() {
  const products = await shopifyClient.product.fetchAll();
  const data = parseShopifyResponse(products);
  console.log(data);
  return (
    <div className='flex flex-col '>
      <Hero />
      <p className='mt-2 text-gray-500'>{data.length} products</p>
      <div className='grid grid-cols-5 gap-10 p-8'>
        {data.length === 0 ? (
          <div className='text-center'>No products found</div>
        ) : (
          data.map((product: Product) => {
            return (
              <Link href={'products/' + product.handle} key={product.id}>
                <div className='flex flex-col'>
                  <div>
                    <Image
                      src={
                        product.images && product.images[0]
                          ? product.images[0]
                          : '/no-image.png'
                      }
                      alt={product.title}
                      className='w-full h-64 object-cover'
                      width={650}
                      height={650}
                    />
                  </div>
                  <div className='text-left text-xs pt-2'>
                    {product.title.substring(0, 55) + '...'}
                  </div>
                  <div className='text-center'>$20</div>
                </div>
              </Link>
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
