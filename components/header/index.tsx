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
  { title: 'home', href: '/' },
  { title: 'blog', href: '/blog' },
  { title: 'best selling', href: '/best-selling' },
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
    <header className='container px-4 md-px-0 py-4  mb-4 flex justify-between mx-auto '>
      <Link href={'/'}>
        <div className='font-[200] text-2xl'>BENIOUARAIN</div>
      </Link>

      <nav className='hidden md:flex items-center '>
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
      <div className='flex gap-2 '>
        <SearchBadge />
        <CartBadge qty={5} />
      </div>
    </header>
  );
}

export default Header;
