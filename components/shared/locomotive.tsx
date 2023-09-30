'use client';

import React from 'react';
import { useEffect } from 'react';
function Locomotive({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <>{children}</>;
}

export default Locomotive;
