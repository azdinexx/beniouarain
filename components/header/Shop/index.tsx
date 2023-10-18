'use client';
import React from 'react';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { Collection } from '@/lib/shopify/types';
import ShopCard from './shop-card';

function Shop({
  getCollections,
}: {
  getCollections: () => Promise<Collection[]>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setIsOpen(true);
    // If there's a timeout in progress, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    // Delay the closing action by 500 milliseconds (adjust as needed)
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);

    // Save the timeout ID so it can be cleared if the mouse enters again
    setTimeoutId(id);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  useEffect(() => {
    getCollections().then((collections) => {
      setCollections(collections);
      setLoading(false);
    });
  });
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className='bg-amber-200/20 px-4 py-1 text-amber-900 active:scale-95'>
        Shop
      </button>
      <div
        className={` absolute left-0 top-20 w-full h-[240px]  shadoworigin-top-bottom  right-0 mt-2   shadow bg-white ${
          isOpen
            ? 'opacity-100 translate-y-0  scale-100'
            : 'opacity-0 -translate-y-8 pointer-events-none scale-75'
        } transition-transform  duration-100 ease-in-out z-[100] flex flex-col`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className='grid h-48 grid-cols-5 gap-5 mt-6 grid-rows-1   place-content-end text-3xl   px-3'>
          {loading
            ? Array(3)
                .fill(true)
                .map((_, i) => (
                  <div
                    key={i}
                    className='bg-gray-200 w-full h-full text-transparent animate-pulse '
                  >
                    hell
                  </div>
                ))
            : collections.map(
                (collection) =>
                  collection.handle !== '' && (
                    <Link
                      replace
                      href={'/collections/' + collection.handle}
                      key={collection.handle}
                    >
                      <ShopCard
                        title={collection.title}
                        img={'/collections/' + collection.handle + '.jpg'}
                      />
                    </Link>
                  )
              )}
          <Link
            replace
            href={'/collections'}
            className='bg-amber-500 text-white flex items-center justify-center   rounded-md'
          >
            All Collections
          </Link>
          <Link
            replace
            href={'/all'}
            className='border border-amber-500 text-amber-500 flex items-center justify-center   rounded-md'
          >
            All Products
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Shop;
