import React from 'react';
import Cart from '../cart';
import { getCollections } from '@/lib/shopify';
import Nav, { ClientNav } from './Nav';
import Link from 'next/link';

function Header() {
  async function getoCollections() {
    'use server';
    return getCollections();
  }
  return (
    <>
      <header className=' container shadow-sm  px-3 md:px-0 sticky top-0 z-[50]  mx-auto flex justify-between items-center bg-white py-3 '>
        <Link href='/' aria-label='Beniourain Home Page'>
          <h1 className='text-2xl uppercase'>Beniourain</h1>
        </Link>
        <Nav func={getoCollections} />
        <Cart />
      </header>
      <ClientNav />
    </>
  );
}

export default Header;
