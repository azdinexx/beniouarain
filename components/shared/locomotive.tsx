'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

export function Locomotive({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/') {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll({
          smooth: true,
          smartphone: {
            smooth: false,
          },
        });
      })();
    } else;
  }, []);
  return <div>{children}</div>;
}
