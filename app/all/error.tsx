'use client';
import Link from 'next/link';
import React from 'react';

function error({ error, reset }: { error: any; reset: () => void }) {
  return (
    <div className='flex gap-2'>
      something went wrong
      <button
        className='text-blue-600'
        onClick={reset}
        aria-label='refresh page'
      >
        refresh
      </button>
      or
      <Link className='underline' href={'/'}>
        go back
      </Link>
    </div>
  );
}

export default error;
