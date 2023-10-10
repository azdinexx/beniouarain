import React from 'react';
import { useCart } from '@/state/cart';
import Link from 'next/link';
import { CartContexto } from '@/hooks/CartContext';

export default function Cart() {
  const { items } = useCart();
  const { setIsOpen } = React.useContext(CartContexto);
  return (
    <div
      className=' absolute top-10 right-10 w-96 h-[calc(100vh-10rem)] bg-white shadow-lg flex flex-col'
      style={{
        zIndex: '99999',
      }}
    >
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between px-5 py-5 border-b border-gray-300'
          >
            <div className='flex items-center'>
              <div className='ml-5'>
                <p className='font-bold'>{item.id}</p>
                <p className='text-sm text-gray-400'>${item.id}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='text-2xl font-bold'>-</button>
              <p className='mx-5'>1</p>
              <button className='text-2xl font-bold'>+</button>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-400'>
          Your cart is empty <br />
          <Link
            href='/products'
            className='underline underline-offset-4'
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Back to Shopping
          </Link>
        </p>
      )}
      <div className='mb-auto'></div>
      <button className='py-5 bg-yellow-400'>proceed to checkout</button>
    </div>
  );
}
