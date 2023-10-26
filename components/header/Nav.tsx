'use client';
import React from 'react';
import Shop from './Shop';
import Link from 'next/link';
import { Collection } from '@/lib/shopify/types';
import { usePathname } from 'next/navigation';
import cn from '@/lib/merge';

function Nav({ func }: { func: () => Promise<Collection[]> }) {
  const pathname = usePathname();
  return (
    <nav className='hidden md:flex items-center   text-md '>
      <ul className='flex items-center gap-6'>
        {navo.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              'hover:text-amber-700 transition-colors duration-150 px-4 py-1 hover:bg-amber-50 ',
              pathname === item.href && 'text-amber-700 underline'
            )}
          >
            {item.title}
          </Link>
        ))}

        {/* SHOP */}
        <Shop getCollections={func} />
      </ul>
    </nav>
  );
}

export default Nav;

export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navo: NavItem[] = [
  { title: 'All', href: '/all' },
  { title: 'Blog', href: '/blog' },
  { title: 'Collections', href: '/collections' },
  {
    title: 'About',
    href: '/about',
  },
];

export function ClientNav() {
  const pathname = usePathname();
  return (
    <ul className='md:hidden flex w-full justify-between px-3 py-2 bg-amber-50'>
      {navo.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={cn(
            '  transition-colors duration-150 px-4 py-1 ',
            pathname === item.href && 'text-amber-700 underline'
          )}
        >
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
