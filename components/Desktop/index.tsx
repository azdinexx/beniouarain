'use client';

import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import Carousel from '../Mobile/carousel';
import Collections from '../Mobile/Collections';
import { Collection, Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';

// Client Components:
const ComponentB = dynamic(() => import('./Desktop'));

export default function MobileOrDesktop({
  Carousel_products,
  collections,
}: {
  Carousel_products: Product[];
  collections: Collection[];
}) {
  const [isclient, setisclient] = useState(false);
  useEffect(() => {
    setisclient(true);
  }, []);

  if (!isclient) return null;
  return (
    <div className='hidden md:block'>
      {/* Load on demand, only when/if the condition is met */}
      {!isMobile && <ComponentB />}
      {isMobile && (
        <>
          <Carousel products={Carousel_products} />
          <Collections collections={collections} />
        </>
      )}
    </div>
  );
}
