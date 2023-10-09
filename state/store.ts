import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { itemCart, userStore } from '@/types/state';

const useUser = create(
  persist<userStore>(
    (set, get) => ({
      name: 'omebody',
      email: '',
      cart: [],
      userMethods: {
        isLogin: () => {
          return get().name !== 'somebody';
        },
      },
      cartMethods: {
        addItem: (data: itemCart) => {
          const currentItems = get().cart;
          const existingItem = currentItems.find((item) => item.id === data.id);

          if (existingItem) {
            set({
              cart: [...get().cart.filter((item) => item.id !== data.id), data],
            });
          }

          set({ cart: [...get().cart, data] });
        },
        removeFromCart: (id: string) => {
          set({ cart: [...get().cart.filter((item) => item.id !== id)] });
        },
        removeAll: () => set({ cart: [] }),
        totalPrice: () => {
          const total = get().cart.reduce((acc, item) => {
            return acc + item.price * item.qty;
          }, 0);

          return total.toFixed(2);
        },
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUser;
