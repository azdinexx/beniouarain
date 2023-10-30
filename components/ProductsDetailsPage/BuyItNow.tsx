'use client';
import React from 'react';
import { buyitnow } from '../cart/actions';
import LoadingDots from '../loading-dots';

function BuyItNow({ id }: { id: string }) {
  const [pending, setPending] = React.useState(false);

  React.useEffect(() => {
    if (pending) {
      setTimeout(() => {
        setPending(false);
      }, 1000);
    }
  }, [pending]);

  return (
    <button
      aria-label='Buy It Now'
      className='  py-3 rounded-lg bg-amber-400 hover:bg-amber-400/80 shadow-md active:scale-90'
      onClick={() => {
        setPending(true);
        buyitnow(id);
      }}
    >
      {pending ? <LoadingDots className='bg-white' /> : ' Buy It Now'}
    </button>
  );
}

export default BuyItNow;
