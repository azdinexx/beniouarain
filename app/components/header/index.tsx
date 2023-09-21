import React from 'react';
import Dropdown from './dropdown';
import { Search } from './search';
import { Avatar, Flex } from '@radix-ui/themes';
import CartBadge from './cartBadge';
import SearchBadge from './SearchBadge';

const categories = ['Kilim', 'Beni-Ouarain', 'Azilal'];
function Header() {
  return (
    <header className='container px-4 md-px-0 py-4  mb-4 flex justify-between mx-auto '>
      <div className='font-[200] text-2xl'>BENIOUARAIN</div>

      <nav className='hidden md:flex items-center '>
        <ul className='flex items-center gap-6'>
          <li> home</li>
          <li>blog</li>
          <li>best selling</li>
          <li>about us</li>
          <Dropdown title='categories' items={categories} />
        </ul>
      </nav>
      <div className='flex gap-2 '>
        <SearchBadge />
        <CartBadge qty={5} />
      </div>
    </header>
  );
}

export default Header;
