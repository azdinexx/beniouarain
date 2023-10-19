import React from 'react';
import { getPolicie } from '@/utils/getPolicies';

async function Page({ params }: { params: { id: string } }) {
  const policie = (await getPolicie(params.id)) as ShopifyBuy.ShopPolicy;

  return (
    <section className='flex flex-col gap-5 max-w-7xl mx-auto p-20 '>
      <a href='/policies' className='px-3 py-1 border rounded-lg w-fit'>
        back
      </a>
      {policie ? (
        <>
          <h1 className='text-2xl font-bold text-center '>{policie?.title}</h1>

          <article
            dangerouslySetInnerHTML={{ __html: policie?.body }}
          ></article>
        </>
      ) : (
        <p>Not found</p>
      )}
    </section>
  );
}

export default Page;
