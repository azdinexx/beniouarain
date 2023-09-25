import React from 'react';
import Link from 'next/link';

function Li({
  href,
  text,
  border = false,
}: {
  href: string;
  text: string;
  border?: boolean;
}) {
  return (
    <li
      className=' px-3 py-1  whitespace-nowrap w-full uppercase hover:text-pink-500 text-gray-500 hover:bg-gray-50  '
      style={{
        borderLeft: border ? '0 0 1px 0 solid #eee' : '',
      }}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
}

export default Li;
