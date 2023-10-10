import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useCart = create(
  persist<Cart>(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: [...get().items.filter((i) => i.id !== item.id), item],
          });
        }

        set({ items: [...get().items, item] });
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((i) => i.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

interface Cart {
  items: Array<CartItem>;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

interface CartItem {
  id: string;
  qty: number;
}
