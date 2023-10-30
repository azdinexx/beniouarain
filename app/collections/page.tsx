import { getCollections } from '@/lib/shopify';
import { Collection } from '@/lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function page() {
  const collections = await getCollections();

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 p-3 md:px-0  gap-8 '>
      {collections.length > 0 &&
        collections.map(
          (item, index) =>
            item.handle !== '' && (
              <div key={item.handle + index}>
                <Link
                  href={'collections/' + item.handle}
                  aria-label={`Read more about ${item.title}`}
                >
                  <div className=' aspect-video rounded-md overflow-hidden'>
                    <Image
                      width={800}
                      height={800}
                      alt={item.title}
                      src={'/collections/' + (index % 3) + '.webp'}
                      className='object-cover  inset-0 w-full h-full'
                    />
                  </div>
                </Link>

                <Link
                  href={'collections/' + item.handle}
                  aria-label={`Read more about ${item.title}`}
                >
                  <h2 className='text-3xl group py-4 underline flex items-center '>
                    {item.title}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4l5.6-5.6Z'
                      />
                    </svg>
                  </h2>
                </Link>
                <p className=''>{item.description.substring(0, 350) + '...'}</p>
              </div>
            )
        )}
    </main>
  );
}

export default page;
