import React from 'react';
import { getPolicies } from '@/utils/getPolicies';

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const policie = getPolicies(id);
  return (
    <article className='flex flex-col gap-5 max-w-7xl mx-auto'>
      {policie ? (
        <>
          <h1 className='text-2xl font-bold '>{policie?.title}</h1>
          <p className=''>{policie?.body}</p>
        </>
      ) : (
        <p>Not found</p>
      )}
    </article>
  );
}

export default Page;
