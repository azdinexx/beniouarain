'use client';
import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { getAllPolicies } from '@/utils/getPolicies';

function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const policies = getAllPolicies();
  return (
    <main className='container p-20 '>
      <article>
        <h1 className='text-xl font-bold'>Policies</h1>
        <ul className=' flex flex-col gap-4 py-6 pl-4'>
          {policies.map((policie) => (
            <li
              className='underline hover:text-amber-500 max-w-fit '
              key={policie.id}
            >
              <Link href={`/policies/${policie.id}`}>{policie.title}</Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Page;
