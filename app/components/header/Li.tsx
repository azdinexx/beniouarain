import React from 'react';
import Link from 'next/link';

function Li({ href, text }: { href: string; text: string }) {
  return (
    <li className='hover:bg-stone-50 px-2 py-1 hover:text-gray-800 '>
      <Link href={href}>{text}</Link>
    </li>
  );
}

export default Li;
