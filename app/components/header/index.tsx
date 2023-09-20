import React from 'react';
import Dropdown from './dropdown';

const categories = ['Kilim', 'Beni-Ouarain', 'Azilal'];
function Header() {
  return (
    <header className='container py-6 flex justify-between mx-auto'>
      <div className='font-thin text-2xl'>BENIOUARAIN</div>

      <nav className='flex items-center '>
        <ul className='flex items-center gap-6'>
          <li> home</li>
          <li>blog</li>
          <li>best selling</li>
          <li>about us</li>
          <Dropdown title='categories' items={categories} />
          <Dropdown title='categories' items={categories} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
