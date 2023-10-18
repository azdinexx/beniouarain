'use client';
import React, { useState } from 'react';
import Shop from './Shop';
import Link from 'next/link';
import { Collection } from '@/lib/shopify/types';

function ClientHeader({
  getCollections,
}: {
  getCollections: () => Promise<Collection[]>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const summaryRef = React.useRef<HTMLDetailsElement>(null);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  const open = () => {
    summaryRef.current?.setAttribute('open', 'true');
    setIsOpen(true);
  };

  const close = () => {
    detailsRef.current?.removeAttribute('open');
    setIsOpen(false);
  };
  return (
    <div className=' col-span-2 flex  '>
      <details open={isOpen} ref={detailsRef}>
        <summary
          ref={summaryRef}
          className='mr-3  cursor-pointer flex md:hidden border rounded-lg items-center justify-center w-full h-full  '
          onClick={open}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='27'
            height='27'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z'
            />
          </svg>
        </summary>
        <div className='fixed    w-full h-full  inset-0' onClick={close}></div>
        <ul className='flex flex-col items-center  w-36  mr-auto  text-sm absolute top-20 bg-white shadow-lg rounded-lg '>
          {nav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className='py-3 hover border-b w-full text-center hover:bg-gray-100'
              onClick={close}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </details>

      <nav className='hidden md:flex items-center mr-auto ml-20 text-sm '>
        <ul className='flex items-center gap-6'>
          {nav.map((item) => (
            <Li key={item.title} text={item.title} href={item.href} />
          ))}

          {/* SHOP */}
          <Shop getCollections={getCollections} />
        </ul>
      </nav>
    </div>
  );
}

export default ClientHeader;

export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const nav: NavItem[] = [
  { title: 'All', href: '/all' },
  { title: 'blog', href: '/blog' },
  { title: 'collections', href: '/collections' },
  {
    title: 'about',
    href: '/about',
  },
];
