import Desktop from '@/components/Desktop/Desktop';
import Collections from '@/components/Mobile/Collections';
import Featured from '@/components/featured';
import Features from '@/components/shared/features';
import { getCollections, getProducts } from '@/lib/shopify';
import { Locomotive } from '@/components/shared/locomotive';

import React, { Suspense } from 'react';
import Caroussel from '@/components/landing/Caroussel';
import Carousel from '@/components/Mobile/carousel';
import MotionCaroussel from '@/components/shared/motion-caroussel';
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <Locomotive>
      <div className='hidden md:block' id='main'>
        <Desktop />
      </div>
      <Carousel products={Carousel_products} />
      <Suspense fallback={'hello'}>
        <Collections collections={collections} />
      </Suspense>
      <div className='hidden md:block'>
        <Featured />
      </div>
      <Caroussel products={Carousel_products} />
      <Features />
      {
        //<MotionCaroussel products={Carousel_products} />
      }
    </Locomotive>
  );
}

export default Page;
