import React from 'react';
import Dropdown from './dropdown';

const categories = ['Kilim', 'Beni-Ouarain', 'Azilal'];
function Header() {
  return (
    <header className='container py-4  mb-4 flex justify-between mx-auto border-b border-gray-400/20'>
      <div className='font-[200] text-2xl'>BENIOUARAIN</div>

      <nav className='flex items-center '>
        <ul className='flex items-center gap-6'>
          <li> home</li>
          <li>blog</li>
          <li>best selling</li>
          <li>about us</li>
          <Dropdown title='categories' items={categories} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
