import React from 'react';
import Dropdown from './dropdown';
import CartBadge from './cartBadge';
import SearchBadge from './SearchBadge';
import Li from './Li';
import Link from 'next/link';
import Popper from './popper';
import Shop from './Shop';

export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const nav: NavItem[] = [
  { title: 'All', href: '/products' },
  { title: 'blog', href: '/blog' },
  { title: 'collections', href: '/collections' },
  {
    title: 'pages',
    href: '/about-us',
    items: [
      {
        title: 'About us',
        href: '/about-us',
      },
      {
        title: 'Contact us',
        href: '/contact-us',
      },
    ],
  },
];
function Header() {
  return (
    <header className='container mx-auto py-4  mb-4 flex  w-full   '>
      <Link href={'/'}>
        <div className='font-[200] text-2xl '>BENIOUARAIN</div>
      </Link>

      <nav className='hidden md:flex items-center mr-auto ml-20 text-sm '>
        <ul className='flex items-center gap-6'>
          {nav.map((item) =>
            item.items ? (
              <Dropdown key={item.title} item={item} />
            ) : (
              <Li key={item.title} text={item.title} href={item.href} />
            )
          )}

          {/* SHOP */}
          <Shop />
        </ul>
      </nav>
      <div className='flex mr-2  '>
        <CartBadge qty={5} />
        <SearchBadge />
      </div>
    </header>
  );
}

export default Header;
