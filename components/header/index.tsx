import React from 'react';
import Cart from '../cart';
import { getCollections } from '@/lib/shopify';
import { ClientNav } from './Nav';

import Link from 'next/link';
import dynamic from 'next/dynamic';
function Header() {
  async function getoCollections() {
    'use server';
    return getCollections();
  }
  const Nav = dynamic(() => import('./Nav'), {
    ssr: false,
  });
  return (
    <>
      <header className=' container px-3 md:px-0 sticky top-0 z-[50]  mx-auto flex justify-between items-center bg-white py-3 '>
        <Link href='/'>
          <h1 className='text-2xl uppercase'>Beniourain</h1>
        </Link>
        <Nav func={getoCollections} />

        {/* CART */}
        <Cart />
      </header>
      <ClientNav />
    </>
  );
}

export default Header;
