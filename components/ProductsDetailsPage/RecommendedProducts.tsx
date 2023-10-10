import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Product } from 'shopify-buy';

function RecommendedProducts({ data }: { data: Array<Product> }) {
  return (
    <div className=' col-span-5    flex flex-col  gap-10   mt-20  border-t p-10'>
      <p className='font-bold text-xl'>You May Also Like</p>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((product) => (
          <div key={product.id}>
            <Link href={product.handle}>
              <div className='aspect-square  w-full  rounded-lg  overflow-hidden transition duration-150 ease-in-out  '>
                <Image
                  src={product.images[0].src}
                  alt='product'
                  className='w-full h-full object-cover'
                  height={400}
                  width={400}
                />
              </div>
              <p className='py-2'>{product.title.substring(0, 50)}</p>
              <p className='font-bold'>
                ${product.variants[0].price.amount} USD
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
