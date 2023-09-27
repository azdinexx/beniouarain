import React from 'react';
import Link from 'next/link';

function Brand() {
  return (
    <section className='flex flex-col gap-3'>
      <Link href='/'>
        <span className='text-lg font-bold hover:underline '>
          BeniOuarain Rugs
        </span>
      </Link>
      <p className='max-w-xs'>
        Our rugs are made from 100% natural wool, and are known for their soft,
        luxurious feel and their unique geometric designs.
      </p>
    </section>
  );
}

export default Brand;
