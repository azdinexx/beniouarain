import Link from 'next/link';
import React from 'react';

const importantLinks = [
  {
    title: 'Collections',
    href: '/collections',
  },

  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact Us',
    href: '/policies/contact',
  },

  {
    title: 'Policies',
    href: '/policies',
  },
];
function ImportantLinks() {
  return (
    <section className='flex flex-col gap-3'>
      <span className='text-lg font-bold '>Important Links</span>
      <ul>
        {importantLinks.map((link) => (
          <li key={link.title} className='underline hover:no-underline'>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ImportantLinks;
