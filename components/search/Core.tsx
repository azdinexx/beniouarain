'use client';
import { Product } from '@/lib/shopify/types';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Core({ SearchProducts }: { SearchProducts: any }) {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchProducts() {
      const products = await SearchProducts({
        query: `tag:rugs title:${search}`,
      });
      console.log(products);
      setProducts(products);
      setLoading(false);
    }
    searchProducts();
  }, [SearchProducts, search]);
  return (
    <div className='flex flex-col mt-3'>
      <div className='flex gap-3 shadow p-1 rounded-md bg-white sticky top-0 '>
        <input
          type='text'
          aria-label='search for products'
          alt='search for products'
          onChange={(e) => {
            setSearch(e.target.value);
            setLoading(true);
          }}
          className='border w-full rounded-md py-2 px-3   '
          autoFocus
        />
        <button
          className='px-5 hover:bg-slate-200  rounded-md bg-gray-100 '
          onClick={() => {
            setLoading(true);
          }}
        >
          Search!
        </button>
      </div>
      <div className='flex justify-between'>
        {loading ? (
          <p className='text-gray-500 text-xs pl-3 mt-3 flex '>
            {`searching for ${search}`}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <circle cx='18' cy='12' r='0' fill='currentColor'>
                <animate
                  attributeName='r'
                  begin='.67'
                  calcMode='spline'
                  dur='1.5s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle cx='12' cy='12' r='0' fill='currentColor'>
                <animate
                  attributeName='r'
                  begin='.33'
                  calcMode='spline'
                  dur='1.5s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
              <circle cx='6' cy='12' r='0' fill='currentColor'>
                <animate
                  attributeName='r'
                  begin='0'
                  calcMode='spline'
                  dur='1.5s'
                  keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8'
                  repeatCount='indefinite'
                  values='0;2;0;0'
                />
              </circle>
            </svg>
          </p>
        ) : products.length === 0 ? (
          <p className='text-gray-500 text-xs pl-3 mt-3'>not found</p>
        ) : (
          <p className='text-gray-500 text-xs pl-3 mt-3'>search for products</p>
        )}
        <p className='text-gray-500 text-xs pr-3 mt-3'>
          {products.length} {products.length === 1 ? 'result' : 'results'}
        </p>
      </div>
      <div
        className={`mt-2 flex flex-col gap-[1px] ${
          products.length === 0 ? 'bg-white' : 'bg-gray-100 '
        }`}
      >
        {products.length === 0 && (
          <p className='text-gray-500 text-md pl-3 mt-2'>no products found</p>
        )}
        {products.map((product, index) => {
          return <Item product={product} key={product.id + index} />;
        })}
      </div>
    </div>
  );
}

export default Core;

function Item({ product }: { product: Product }) {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      href={`/all/${product.handle}`}
      className='flex  justify-between gap-2  group hover:bg-gray-50 bg-white p-2'
    >
      <div
        className={`relative w-14 h-14   aspect-square rounded-md border bg-gray-300 ${
          loading ? 'animate-pulse' : ''
        }`}
      >
        <Image
          alt={product.title}
          src={product.images[0].url}
          className='rounded-md'
          fill
          objectFit='cover'
          quality={50}
          onLoad={() => setLoading(false)}
        />
      </div>
      <p className='text-gray-500 text-md pl-3 mt-2 w-full'>
        {product.title.length < 140
          ? product.title
          : product.title.slice(0, 140) + '...'}
      </p>
      <button className='px-2 group-hover:text-gray-600'>view</button>
    </Link>
  );
}
