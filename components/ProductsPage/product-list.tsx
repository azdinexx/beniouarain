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
  }: QUERY_OBJ) => Promise<Product[] | null>;
}

interface QUERY_OBJ {
  query?: string;
  sortKey?: string;
  reverse?: boolean;
}

function ProductList({ getProducts }: ProductListProps) {
  const [data, setData] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [queryObj, setQueryObj] = React.useState<QUERY_OBJ>({
    query: 'tag:rugs ',
    sortKey: 'PRICE',
    reverse: false,
  });
  useEffect(() => {
    setLoading(true);
    const res = getProducts(queryObj);

    if (data === null) return;
    const timeoutID = setTimeout(() => {
      res.then((data) => {
        if (data === null) return;
        setData(data);
        setLoading(false);
      });
    }, 600);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [queryObj, getProducts]);

  if (loading) {
    return <ProductListSkeleton />;
  }
  return (
    <>
      <Hero setQuery={setQueryObj} />

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

function Hero({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<QUERY_OBJ>>;
}) {
  let initialState = Array(filters.length).fill(false);
  return (
    <section>
      <h2 className='my-8 text-5xl  '>All Products </h2>

      <div>
        <p>filter by </p>
        <div className='flex gap-4 mt-2'>
          {filters.map((filter) => {
            return (
              <button
                className='border px-4 py-1 rounded-full  capitalize bg-gray-50'
                onClick={() => {
                  setQuery(filter.query);
                }}
                key={filter.title}
              >
                {filter.title}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const filters = [
  {
    title: 'price',
    query: {
      query: 'tag:rugs ',
      sortKey: 'PRICE',
      reverse: false,
    },
  },
  {
    title: 'title',
    query: {
      query: 'tag:rugs ',
      sortKey: 'TITLE',
      reverse: false,
    },
  },
  {
    title: 'new',
    query: {
      query: 'tag:rugs ',
      sortKey: 'CREATED_AT',
      reverse: false,
    },
  },
];

const ProductListSkeleton = () => {
  const Dummy = new Array(10).fill(0);

  return (
    <>
      <section>
        <h2 className='my-3 text-5xl text-transparent bg-gray-100 animate-pulse  w-fit'>
          All Products{' '}
        </h2>

        <div>
          <p className='w-fit text-transparent bg-gray-100 animate-pulse  '>
            filter by{' '}
          </p>
          <div className='flex gap-4 mt-2'>
            {filters.map((filter) => {
              return (
                <button
                  className='border px-6 py-3 rounded-xl uppercase'
                  key={filter.title}
                >
                  <span className='text-transparent bg-gray-50 animate-pulse '>
                    {filter.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
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
};
