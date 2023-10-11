'use client';
import Cart from '@/components/carto';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContexto = createContext<Props>({
  setIsOpen: () => {},
});

export function CartContext({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContexto.Provider value={{ setIsOpen }}>
      {isOpen && <Cart />}
      {children}
    </CartContexto.Provider>
  );
}
