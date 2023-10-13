import React from 'react';
import Cart from '../cart';
import ClientHeader from './ClientHeader';

function Header() {
  return (
    <header className='container mx-auto py-4 px-2 md:px-0  mb-4 flex  w-full sticky top-0 bg-white z-[50]    '>
      <ClientHeader />
      <div className='relative flex mr-2  '>
        <Cart />
      </div>
    </header>
  );
}

export default Header;
