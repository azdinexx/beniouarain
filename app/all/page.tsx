import React, { Suspense } from 'react';
import { getProducts } from '@/lib/shopify';

import ProductList from '@/components/ProductsPage/product-list';
import { Metadata } from 'next';

// MetaData
export const metadata: Metadata = {
  title: 'Blog',
  description: 'BeniOuarain Rugs Blog , read and discover more about rugs',
  openGraph: {
    title: 'Blog - BeniOuarain',
    description: 'BeniOuarain Rugs Blog , read and discover more about rugs',
  },
  robots: {
    follow: true,
    index: true,
  },
};
async function Page() {
  async function GET_PRODUCTS({
    query,
    sortKey,
    reverse,
  }: {
    query?: string;
    sortKey?: string;
    reverse?: boolean;
  }) {
    'use server';
    return getProducts({ query, sortKey, reverse });
  }

  return (
    <main className='flex flex-col p-3 md:p-0'>
      <ProductList getProducts={GET_PRODUCTS} />
    </main>
  );
}

export default Page;
