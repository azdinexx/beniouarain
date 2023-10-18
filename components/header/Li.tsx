import React from 'react';
import Link from 'next/link';

function Li({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} replace>
      <li className=' px-3 py-1  whitespace-nowrap w-full uppercase hover:text-amber-500 text-amber-800 hover:bg-amber-50  '>
        {text}
      </li>
    </Link>
  );
}

export default Li;
