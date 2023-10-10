import Image from 'next/image';
import React from 'react';
import { Product } from 'shopify-buy';

function RecommendedProducts({ data }: { data: Array<Product> }) {
  return (
    <div className=' col-span-5    flex flex-col  gap-10   mt-20  border-t p-10'>
      <p className='font-bold text-xl'>You May Also Like</p>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((product) => (
          <div key={product.id}>
            <div className='aspect-square  w-full  rounded-lg  overflow-hidden transition duration-150 ease-in-out  '>
              <Image
                src={product.images[0].src}
                alt='product'
                className='w-full h-full object-cover'
                height={200}
                width={200}
              />
            </div>
            <p>
              {product.title.substring(0, 50)} - $
              {product.variants[0].price.amount} USD
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
