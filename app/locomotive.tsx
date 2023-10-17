'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export function Locomotive({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    isMobile
      ? null
      : (async () => {
          console.log('locomotive');
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const scroll = new LocomotiveScroll({
            smooth: true,
            smartphone: {
              smooth: false,
            },
          });
        })();
  }, [pathname]);
  return <div>{children}</div>;
}
