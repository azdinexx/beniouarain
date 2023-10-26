import { Collection } from '@/lib/shopify/types';
import Link from 'next/link';
import React from 'react';

interface Props {
  collections: Collection[];
}
function Collections({ collections }: Props) {
  if (!collections) return null;
  return (
    <div className='flex flex-col p-4'>
      <p className='text-xl font-bold pb-4'>Collections :</p>
      <section className='md:hidden  grid grid-cols-2 py-3 gap-3 '>
        {collections.map((collection, index) =>
          collection.handle === ''
            ? null
            : index < 4 && (
                <Link
                  href={'/collections/' + collection.handle}
                  key={collection.path}
                >
                  <div
                    style={{
                      backgroundImage: `url(${
                        '/collections/' + index + '.jpg'
                      })`,
                    }}
                    className='bg-cover bg-center bg-no-repeat aspect-square flex items-center justify-center text-2xl font-semibold text-white rounded-lg'
                  >
                    <p className='max-w-[100px] text-center'>
                      {collection.title.split(':')[0]}
                    </p>
                  </div>
                </Link>
              )
        )}
        <Link
          href='/collections'
          className='  flex items-center justify-center text-2xl font-semibold text-white rounded-lg bg-amber-400'
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
    </div>
  );
}

export default Collections;
