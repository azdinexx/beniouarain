import Collections from '@/components/Mobile/Collections';
import Featured from '@/components/featured';
import Features from '@/components/shared/features';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
import Caroussel from '@/components/landing/Caroussel';
import Carousel from '@/components/Mobile/carousel';

async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <>
      <Carousel products={Carousel_products} />
      <Collections collections={collections} />
      <Featured />
      <Caroussel products={Carousel_products} />
      <Features />
    </>
  );
}

export default Page;
