'use client';
import React from 'react';
import { Cart } from './cart';
import { useContext } from 'react';
import { CartContexto } from '@/hooks/CartContext';

function CartBadge({ qty }: { qty: number }) {
  const { setIsOpen } = useContext(CartContexto);
  return (
    <div
      className='relative  mx-2 cursor-pointer hover:bg-gray-50 rounded-full aspect-square flex justify-center items-center'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Cart />
      <div className='absolute -top-1 right-0 bg-red-500 text-xs w-4 h-4 rounded-full text-white flex items-center justify-center'>
        <span>{qty}</span>
      </div>
    </div>
  );
}

export default CartBadge;
