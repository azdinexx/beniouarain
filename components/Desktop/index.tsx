'use client';

import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import Carousel from '../Mobile/carousel';
import Collections from '../Mobile/Collections';
import { Collection, Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';

// Client Components:
const Desktop = dynamic(() => import('./Desktop'));
const Carouselo = dynamic(() => import('../Mobile/carousel'));
const Collectionso = dynamic(() => import('../Mobile/Collections'));

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
  console.log(isMobile);

  if (!isclient) return null;
  return (
    <div className='hidden md:block'>
      {/* Load on demand, only when/if the condition is met */}
      {!isMobile && <Desktop />}
      {isMobile && (
        <>
          <Carouselo products={Carousel_products} />
          <Collectionso collections={collections} />
        </>
      )}
    </div>
  );
}
