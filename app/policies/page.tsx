import React from 'react';
import Link from 'next/link';
import { getAllPolicies } from '@/utils/getPolicies';

async function Page() {
  const policies = await getAllPolicies();

  if (!policies) return <p>Not found</p>;
  return (
    <main className='container  max-w-7xl mx-auto p-20 min-h-screen '>
      <article>
        <h1 className='text-xl font-bold'>Policies</h1>
        <ul className=' flex flex-col gap-4 py-6 pl-4'>
          {policies?.map((policie, id) => (
            <li className='underline hover:text-amber-500 max-w-fit ' key={id}>
              <Link
                href={`/policies/${policie
                  .toLocaleLowerCase()
                  .replaceAll(' ', '-')}`}
              >
                {policie}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Page;
