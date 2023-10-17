import Desktop from '@/components/Desktop/Desktop';
import Collections from '@/components/Mobile/Collections';
import Carousel from '@/components/Mobile/carousel';
import Featured from '@/components/featured';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <main className='container mx-auto'>
      <div className='hidden md:block'>
        <Desktop />
      </div>
      <Carousel products={Carousel_products} />
      <Collections collections={collections} />
      <div className='hidden md:block'>
        <Featured />
      </div>
    </main>
  );
}

export default Page;
