'use client';

import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';

import { Collection, Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';

// Client Components:
const Desktop = dynamic(() => import('./Desktop'));

export default function MobileOrDesktop() {
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
    </div>
  );
}
