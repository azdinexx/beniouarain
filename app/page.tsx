import MobileOrDesktop from '@/components/Desktop';
import Collections from '@/components/Mobile/Collections';
import Carousel from '@/components/Mobile/carousel';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <main>
      <MobileOrDesktop />
      <Carousel products={Carousel_products} />
      <Collections collections={collections} />
    </main>
  );
}

export default Page;
