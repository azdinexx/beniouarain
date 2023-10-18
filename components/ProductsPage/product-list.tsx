'use client';
import { Product } from '@/lib/shopify/types';
import React, { useEffect } from 'react';
import Card from './product-card';
import CardSkeleton from './product-card-skeleton';

interface ProductListProps {
  getProducts: ({
    query,
    sortKey,
    reverse,
  }: {
    query?: string;
    sortKey?: string;
    reverse?: boolean;
  }) => Promise<Product[] | null>;
}
function ProductList({ getProducts }: ProductListProps) {
  const [data, setData] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  useEffect(() => {
    getProducts({}).then((data) => {
      if (data === null) return;
      setData(data);
      setLoading(false);
    });
  });

  const Dummy = new Array(10).fill(0);

  if (loading) {
    return (
      <>
        <p className='mt-2 text-gray-500 flex gap-2'>
          {' '}
          <span className='text-transparent bg-gray-400/30  animate-pulse rounded-lg'>
            10
          </span>
          <span className=' bg-gray-100 rounded-xl text-transparent animate-pulse'>
            products
          </span>
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:p-8 '>
          {Dummy.map((_, i) => {
            return <CardSkeleton key={i} />;
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <p className='mt-2 text-gray-500'>{data.length} products</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:p-8 '>
        {data.length === 0 ? (
          <div className='text-center'>No products found</div>
        ) : (
          data.map((product: Product) => {
            return (
              <Card
                key={product.id}
                title={product.title}
                images={product.images.map((image) => image)}
                handle={product.handle}
                price={product.variants[0].price.amount}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default ProductList;
