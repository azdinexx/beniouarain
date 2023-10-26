'use client';
import CardSkeleton from '@/components/ProductsPage/product-card-skeleton';

export default function ProductListSkeleton() {
  const Dummy = new Array(10).fill(0);
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
}
