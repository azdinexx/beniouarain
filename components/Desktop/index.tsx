'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';

// Client Components:
const ComponentB = dynamic(() => import('./Desktop'));

export default function ClientComponentExample() {
  return (
    <>
      {/* Load on demand, only when/if the condition is met */}
      {isMobile && <ComponentB />}
    </>
  );
}
