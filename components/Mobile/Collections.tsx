import { Collection } from '@/lib/shopify/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  collections: Collection[];
}
function Collections({ collections }: Props) {
  if (!collections) return null;
  return (
    <section className='grid grid-cols-2 md:grid-cols-4 py-3 px-4 md:px-0 gap-3 md:gap-10  my-10 '>
      {collections.map((collection, index) =>
        collection.handle === ''
          ? null
          : index < 4 && (
              <Link
                href={'/collections/' + collection.handle}
                key={collection.path}
              >
                <div className='relative overflow-hidden  aspect-square flex items-center justify-center text-2xl font-semibold text-white rounded-lg'>
                  <Image
                    src={`${'/collections/' + index + '.webp'}`}
                    alt={collection.title}
                    fill
                    className=' -z-0 object-cover'
                    quality={60}
                  />
                  <p className='max-w-[100px] text-center z-10'>
                    {collection.title.split(':')[0]}
                  </p>
                </div>
              </Link>
            )
      )}
      <Link
        href='/collections'
        className='  flex items-center justify-center text-2xl font-semibold text-black rounded-lg bg-amber-400/30'
      >
        See All
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z'
          />
        </svg>
      </Link>
    </section>
  );
}

export default Collections;
