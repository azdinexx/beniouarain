import React, { Suspense } from 'react';
import { getProducts } from '@/lib/shopify';

import ProductList from '@/components/ProductsPage/product-list';

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
    <div className='flex flex-col p-3 md:p-0'>
      <ProductList getProducts={GET_PRODUCTS} />
    </div>
  );
}

export default Page;
