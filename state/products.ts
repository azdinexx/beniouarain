import { productStore } from '@/types/state';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { shopifyClient, parseShopifyResponse } from '@/lib/shopify';

const useProducts = create(
  persist<productStore>(
    (set, get) => ({
      products: [],
      setproducts: (products) => set({ products }),
    }),
    {
      name: 'products-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProducts;
