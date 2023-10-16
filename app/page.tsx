import MobileOrDesktop from '@/components/Desktop';
import Collections from '@/components/Mobile/Collections';
import Carousel from '@/components/Mobile/carousel';
import Featured from '@/components/featured';
import { getCollections, getProducts } from '@/lib/shopify';

import React from 'react';
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:featured AND tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <main>
      <MobileOrDesktop
        collections={collections}
        Carousel_products={Carousel_products}
      />
    </main>
  );
}

export default Page;
