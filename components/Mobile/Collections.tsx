import { Collection } from '@/lib/shopify/types';
import React from 'react';

interface Props {
  collections: Collection[];
}
function Collections({ collections }: Props) {
  if (!collections) return null;
  return (
    <section className='md:hidden  grid grid-cols-2 py-3 gap-3 p-4'>
      {collections.map((collection) =>
        collection.handle === '' ? null : (
          <div
            key={collection.path}
            style={{
              backgroundImage: `url(${
                '/collections/' + collection.handle + '.jpg'
              })`,
            }}
            className='bg-cover bg-center bg-no-repeat aspect-square flex items-center justify-center text-2xl font-semibold text-white rounded-lg'
          >
            <p className='max-w-[100px] text-center'>{collection.title}</p>
          </div>
        )
      )}
      <div className='  flex items-center justify-center text-2xl font-semibold text-white rounded-lg bg-amber-400'>
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
      </div>
    </section>
  );
}

export default Collections;
